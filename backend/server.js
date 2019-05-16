let express = require("express");
let app = express();
let cors = require("cors");
let multer = require("multer");
let upload = multer();
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
app.use(bodyParser());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
let generateId = () => {
  return "" + Math.floor(Math.random() * 10000000);
};
let Mongo = require("mongodb");
let MongoClient = Mongo.MongoClient;
let ObjectId = Mongo.ObjectId;
let url =
  "mongodb+srv:fatou2:ilovejack@cluster0-31ytq.mongodb.net/test?retryWrites=true";
let dbs = undefined;
MongoClient.connect(url, (err, allDbs) => {
  console.log(err);
  dbs = allDbs;
});
app.post("/signup", upload.none(), (req, res) => {
  let username = req.body.username;
  let enteredPassword = req.body.password;
  let db = dbs.db("Forum");
  db.collection("users").findOne({ user: username }, (err, results) => {
    if (results === null) {
      let sessionId = generateId();
      db.collection("sessions").insertOne({ sessionId, username });
      db.collection("users").insert({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        user: username,
        password: enteredPassword
      });
      res.cookie("sid", sessionId);
      res.send(JSON.stringify({ success: true }));
      return;
    }
    res.send(JSON.stringify({ success: false }));
  });
});
app.post("/login", upload.none(), (req, res) => {
  let username = req.body.username;
  let enteredPassword = req.body.password;
  let db = dbs.db("Forum");
  db.collection("users").findOne(
    { user: username, password: enteredPassword },
    (err, results) => {
      if (results !== null) {
        let expectedPassword = results.password;
        let expectedUsername = results.user;
        if (
          enteredPassword === expectedPassword &&
          expectedUsername === username
        ) {
          let sessionId = generateId();
          db.collection("sessions").insertOne({ sessionId, username });
          res.cookie("sid", sessionId);
          res.send(JSON.stringify({ success: true }));
        } else res.send(JSON.stringify({ success: false }));
      } else res.send(JSON.stringify({ success: false }));
    }
  );
});

app.get("/check-login", (req, res) => {
  let db = dbs.db("Forum");
  db.collection("sessions").findOne(
    { sessionId: req.cookies.sid },
    (err, results) => {
      if (results) {
        let username = results.username;
        if (username !== undefined) {
          res.send(JSON.stringify({ success: true }));
          return;
        }
        res.send(JSON.stringify({ success: false }));
      } else {
        res.json({ success: false });
      }
    }
  );
});

app.get("/logout", (req, res) => {
  let db = dbs.db("Forum");
  db.collection("sessions").remove({ sessionId: req.cookies.sid });
  res.send(JSON.stringify({ success: true }));
});
app.post("/new-thread", upload.none(), (req, res) => {
  let newThread = req.body;
  let sessionId = req.cookies.sid;
  let db = dbs.db("Forum");
  db.collection("sessions").findOne({ sessionId }, (err, results) => {
    console.log(err);
    let username = results.username;
    newThread.replies = [];
    newThread.user = username;
    db.collection("threads").insertOne(newThread);
    return res.send(JSON.stringify({ newThread, success: true }));
  });
});
app.post("/replies", upload.none(), (req, res) => {
  let sessionId = req.cookies.sid;
  console.log("req.body", req.body);
  let db = dbs.db("Forum");
  let threadId = req.body.threadId;
  console.log("threadId", threadId);
  db.collection("sessions").findOne({ sessionId }, (err, results) => {
    console.log(err);
    let username = results.username;
    db.collection("threads").updateOne(
      { _id: ObjectId(threadId) },
      { $push: { replies: { user: username, msg: req.body.msg } } }
    );
    res.send(JSON.stringify({ success: true }));
  });
});
app.get("/thread", (req, res) => {
  let db = dbs.db("Forum");
  db.collection("threads")
    .find({})
    .toArray((err, results) => {
      console.log(err);
      res.send(JSON.stringify({ success: true, results }));
    });
});
// app.get("/category", (req, res) => {
//   let db = dbs.db("Forum");
//   db.collection("categories")
//     .find({})
//     .toArray((err, results) => {
//       res.send(JSON.stringify({ success: true, results }));
//     });
// });
// app.post("new-category", upload.none(), (req, res) => {
//   let newCategory = req.body;
//   let db = dbs.db("Forum");
//   db.collection("categories").insert(newCategory, (err, results) => {
//     res.send(JSON.stringify({ success: true, results }));
//   });
// });
app.post("/allItems", upload.none(), (req, res) => {
  let db = dbs.db("Forum");
  db.collection("items")
    .find({})
    .toArray((err, results) => {
      console.log(err);
      return res.send(JSON.stringify({ results }));
    });
});
app.post("/new-item", upload.none(), (req, res) => {
  let newItem = req.body;
  let db = dbs.db("Forum");
  newItem.id = generateId();
  db.collection("items").insert(newItem, (err, results) => {
    console.log(err);
    return res.send(JSON.stringify({ success: true, results }));
  });
});
// app.post("/dms-sent", upload.none(), (req, res) => {
//   let sessionId = req.cookies.sid;
//   let db = dbs.db("Forum");
//   db.collection("sessions").findOne({ sessionId }, (err, results) => {
//     let username = results.username;
//     let msg = req.body.msg;
//     let destination = req.body.destinationUser;
//     let db = dbs.db("Forum");
//     db.collection("dms").insertOne(
//       {
//         from: username,
//         to: destination,
//         messages: [username + ": " + msg]
//       },
//       (err, results) => {
//         console.log(err);
//         res.send(JSON.stringify({ success: true, results }));
//       }
//     );
//   });
// });
// app.post("/dms", upload.none(), (req, res) => {
//   let sessionId = req.cookies.sid;
//   db.collection("sessions").findOne({ sessionId }, (err, results) => {
//     let username = results.username;
//     let msg = req.body.msg;
//     let destination = req.body.destinationUser;
//     let db = dbs.db("Forum");
//     db.collection("dms")
//       .find({ to: expectedUsername })
//       .toArray((err, results) => {
//         console.log(err);
//         res.send(JSON.stringify({ success: true, results }));
//       });
//   });
// });
app.listen(4000);

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
let MongoClient = require("mongoDb").MongoClient;
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
  let picture = req.body.image;
  let db = dbs.db("Forum");
  db.collection("users").findOne({ user: username }, (err, results) => {
    if (results === null) {
      let sessionId = generateId();
      db.collection("sessions").insertOne({ sessionId, username });
      db.collection("users").insert({
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
  console.log("username", username);
  let enteredPassword = req.body.password;
  console.log("password", enteredPassword);
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
  let sessionId = req.cookies.sid;
  let db = dbs.db("Forum");
  db.collection("sessions").findOne({ sessionId }, (err, results) => {
    let username = results.username;
    if (username !== undefined) {
      res.send(JSON.stringify({ success: true }));
    }
    res.send(JSON.stringify({ success: false }));
  });
});

app.get("/logout", (req, res) => {
  let item = db.collection("sessions").findOne({ username: req.body.username });
  db.collection("sessions").remove({ _id: item._id });
  res.send(JSON.stringify({ success: true }));
});
app.post("/thread", upload.none(), (req, res) => {
  let db = dbs.db("Forum");
  let sport = req.body.sport;
  db.collection("threads").insert(
    {
      threadTitle: req.body.threadTitle,
      location: req.body.location,
      category: sport,
      replies: [],
      id: generateId()
    },
    (err, results) => {
      console.log(err);
      res.send(JSON.stringify({ success: true, results }));
    }
  );
});
app.post("/replies", upload.none(), (req, res) => {
  let db = dbs.db("Forum");
  db.collection("sessions").findOne({ sessionId }, (err, results) => {
    let username = results.username;
    db.collection("threads").updateOne(
      { id: req.body.id },
      { $push: { user: username, msg: msg } }
    );
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
app.post("");
// app.post("/allItems", upload.none(), (req, res) => {
//   let db = dbs.db("Forum");
//   db.collection("items")
//     .find({})
//     .toArray((err, results) => {
//       return res.send(JSON.stringify({ results }));
//     });
// });
// app.post("/new-item", upload.none(), (req, res) => {
//   let newItem = req.body;
//   let db = dbs.db("Forum");
//   newItem.id = generateItemId();
//   db.collection("items").insert(newItem, (err, results) => {
//     console.log(err);
//     return res.send(JSON.stringify({ succes: true, results }));
//   });
// });
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

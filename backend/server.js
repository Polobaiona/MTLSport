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
      console.log(err);
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
  db.collection("sessions").deleteOne({ sessionId: req.cookies.sid });
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
app.post("/myAccount", (req, res) => {
  let myAccount = req.body;
  let db = dbs.db("Forum");
  db.collection("sessions").findOne(
    { sessionId: req.cookies.sid },
    (err, results) => {
      myAccount.firstName = results.firstName;
      myAccount.lastName = results.lastName;
      db.collection("account").insertOne(myAccount);
      return res.send(JSON.stringify({ success: true, myAccount }));
    }
  );
});
app.post("/sell-item", upload.none(), (req, res) => {
  let sellItem = req.body;
  console.log("sells", sellItem);
  let sessionId = req.cookies.sid;
  let db = dbs.db("Forum");
  db.collection("sessions").findOne({ sessionId }, (err, results) => {
    console.log(err);
    let username = results.username;
    sellItem.replies = [];
    sellItem.user = username;
    db.collection("threads").insertOne(sellItem);
    return res.send(JSON.stringify({ sellItem, success: true }));
  });
});
app.get("/delete-lastReply", (req, res) => {
  let sessionId = req.cookies.sid;
  let db = dbs.db("Forum");
  db.collection("sessions").findOne({ sessionId }, (err, results) => {
    console.log(err);
    let username = results.username;
    db.collection("threads").updateOne(
      { _id: ObjectId(threadId) },
      { $pop: { replies: { user: username, msg: req.body.msg } } }
    );
  });
});
app.listen(4000);

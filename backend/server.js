let express = require("express");
let app = express();
let cors = require("cors");
let multer = require("multer");
let upload = multer();
let cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
let sessions = {};
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
  let db = dbs.db("Forum");
  db.collection("users").findOne({ user: username }, (err, results) => {
    console.log(err);
    if (results === null) {
      let sessionId = generateId();
      sessions[sessionId] = username;
      db.collection("users").insert({
        user: username,
        password: enteredPassword,
        userId: generateId()
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
          sessions[sessionId] = expectedUsername;
          res.cookie("sid", sessionId);
          res.send(JSON.stringify({ success: true }));
          return;
        }
      }
    }
  );
  res.send(JSON.stringify({ success: false }));
});

app.get("/check-login", (req, res) => {
  let sessionId = req.cookies.sid;
  let username = sessions[sessionId];
  if (username !== undefined) {
    res.send(JSON.stringify({ success: true }));
  }
  res.send(JSON.stringify({ success: false }));
});
app.get("/logout", (req, res) => {
  let sessionId = req.cookies.sid;
  let username = sessions[sessionId];
  delete username;
  res.send(JSON.stringify({ success: true }));
});

app.post("/thread", upload.none(), (req, res) => {
  let sessionId = req.cookies.sid;
  let username = sessions[sessionId];
  console.log("username", username);
  let msg = req.body.msg;
  let sport = req.body.sport;
  let db = dbs.db("Forum");
  db.collection("threads").insert(
    {
      location: req.body.location,
      category: sport,
      thread: [{ user: username, message: msg }]
    },
    (err, results) => {
      console.log(err);
      res.send(JSON.stringify({ success: true, results }));
    }
  );
});
app.post("/dms-sent", upload.none(), (req, res) => {
  let sessionId = req.cookies.sid;
  let username = sessions[sessionId];
  let picture = req.body.image;
  let msg = req.body.msg;
  let destination = req.body.destinationUser;
  let db = dbs.db("Forum");
  db.collection("dms").insert(
    {
      name: username,
      image: picture,
      dms: [{ from: username, to: destination, messages: msg }]
    },
    (err, results) => {
      console.log(err);
      res.send(JSON.stringify({ success: true, results }));
    }
  );
});
app.post("/dms-recieved", upload.none(), (req, res) => {
  let sessionId = req.cookies.sid;
  let username = sessions[sessionId];
  let picture = req.body.image;
  let msg = req.body.msg;
  let destination = req.body.destinationUser;
  let db = dbs.db("Forum");
  db.collection("dms").insert(
    {
      name: username,
      image: picture,
      dms: [{ from: destination, messages: msg }]
    },
    (err, results) => {
      console.log(err);
      res.send(JSON.stringify({ success: true, results }));
    }
  );
});
app.post("/dms", upload.none(), (req, res) => {
  let sessionId = req.cookies.sid;
  let username = sessions[sessionId];
  let msg = req.body.msg;
  let destination = req.body.destinationUser;
  let db = dbs.db("Forum");
  db.collection("dms").insert(
    {
      from: username,
      to: destination,
      messages: msg
    },
    (err, results) => {
      console.log(err);
      res.send(JSON.stringify({ success: true, results }));
    }
  );
});
app.listen(4000);

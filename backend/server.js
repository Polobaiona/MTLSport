let express = require("express");
let app = express();
let cors = require("cors");
let multer = require("multer");
let upload = multer();
let cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
let passwords = {};
let sessions = {};
let generateId = () => {
  return "" + Math.floor(Math.random() * 10000000);
};
let generateItemId = () => {
  return "" + Math.floor(Math.random() * 1000);
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
  if (passwords[username] === undefined) {
    let sessionId = generateId();
    sessions[sessionId] = username;
    passwords[username] = enteredPassword;
    res.cookie("sid", sessionId);
    res.send(JSON.stringify({ success: true }));
  }
  res.send(JSON.stringify({ success: false }));
});
app.post("/login", upload.none(), (req, res) => {
  let username = req.body.username;
  let enteredPassword = req.body.password;
  let expectedPassword = passwords[username];
  if (enteredPassword === expectedPassword) {
    let sessionId = generateId();
    sessions[sessionId] = username;
    res.cookie("sid", sessionId);
    res.send(JSON.stringify({ success: true }));
  }
  res.send(JSON.stringify({ success: false }));
});
app.post("/check-login", upload.none(), (req, res) => {
  let sessionId = req.cookies.sid;
  let username = sessions[sessionId];
  if (username !== undefined) {
    res.send(JSON.stringify({ success: true }));
  }
  res.send(JSON.stringify({ success: false }));
});
app.post("/thread", upload.none(), (req, res) => {
  let sessionId = req.cookies.sid;
  let username = sessions[sessionId];
  let msg = req.body.msg;
  let sport = raq.body.sport;
  let db = dbs.db("Forum");
  db.collection("threads").insert(
    {
      location: req.body.location,
      category: sport,
      thread: [
        { user: username, message: msg },
        { user: username, message: msg }
      ]
    },
    (err, results) => {
      console.log(err);
      res.send(JSON.stringify({ success: true, results }));
    }
  );
});
app.post("/user", upload.none(), (req, res) => {
  let sessionId = req.cookies.sid;
  let username = sessions[sessionId];
  let picture = req.body.image;
  let msg = req.body.msg;
  let db = dbs.db("Forum");
  db.collection("users").insert({
    name: username,
    image: picture,
    dms: [{ from: username, to: username, messages: msg }]
  });
});
app.listen(4000);

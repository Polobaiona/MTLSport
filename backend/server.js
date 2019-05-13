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

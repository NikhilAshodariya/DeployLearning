var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var fs = require('fs');

var moveController = require("./server/controller/moveController.js");
var chessOperationController = require("./server/controller/chessOperation.js");
var sendChessBoard = require("./server/controller/sendChessBoard.js");
var userLoginController = require("./server/controller/LoginController.js");
var sessionSecretFilePath = "./server/passwords/SessionSecret.json";

var PORT = 8081;
// var URL = `mongodb://127.0.0.1:27017/Chess`;
var URL = `mongodb://Nikhil:123@ds153948.mlab.com:53948/nikhilchess`;

// Connecting to DataBase
mongoose.connect(URL,function(err){
  if (err) {
    console.log("Unable to connect to Database");
    //console.log("Terminating Execution");
    //process.exit();
  }
});

var app = express();

var logger = function(request, response, next) {
  console.log(`Time : ${new Date().toLocaleString()}\nRequesting Page : ${request.path}`);
  next();
}


chessBoardRouter = express.Router();
chessBoardRouter.get("/", function(request, response) {
  if (request.session.email == "" ||
    request.session.email == undefined ||
    request.session.email == null) {
    response.redirect("/Login");
  } else {
    response.sendFile(__dirname + "/public/html/table.html");
  }
});

chessBoardRouter.get("/getChessBoard", function(request, response) {
  var data = sendChessBoard.getChessPosition(request, response);
  response.setHeader("Content-Type", "application/JSON");
  response.send(JSON.stringify({
    chessBoard: data
  }));
});

chessBoardRouter.get("/getWhichPlayerMove", function(request, response) {
  var data = moveController.getWhichMovePiece(request, response);
  response.setHeader("Content-Type", "application/JSON");
  response.send(JSON.stringify({
    whichPlayerMove: data
  }))
});

chessBoardRouter.get("/reset", function(request, response) {
  var result = chessOperationController.resetChessBoard(request, response);
  if (result == true) {
    response.redirect("/chessBoard");
  } else {
    console.log("Chess Board Cannot be reset");
    response.redirect("/chessBoard");
  }
});

chessBoardRouter.get("/move/:from/:to", function(request, response) {
  result = moveController.movePiece(request, response);
  // result = moveController.movePiece(request.params.from, request.params.to);
  response.setHeader("Content-Type", "application/JSON");
  response.send(JSON.stringify({
    moveStatus: result
  }));
});

Login = express.Router();
Login.get("/", function(req, res) {
  if (req.session.email == "" ||
    req.session.email == undefined ||
    req.session.email == null) {
    res.sendFile(__dirname + "/public/html/Login.html");
  } else {
    // userLoginController.signIn(req, res);
    res.redirect("/chessBoard");
  }
});

Login.post("/signUp", (req, res) => {
  userLoginController.signUp(req, res);
  res.redirect("/Login");
});

Login.post("/signIn", (req, res) => {
  if (req.session.email == "" ||
    req.session.email == undefined ||
    req.session.email == null) {
    userLoginController.signIn(req, res);
  } else {
    response.redirect("/chessBoard");
  }
});

Login.get("/signOut", (req, res) => {
  userLoginController.signOut(req, res);
});

// Reading SessionSecret
var obj = JSON.parse(fs.readFileSync(sessionSecretFilePath, 'utf8'));

app.use(logger);
app.use(express.static("public"));
app.use(session({
  secret: obj["SessionSecret"]
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/chessBoard", chessBoardRouter);
app.use("/Login", Login);
app.listen(process.env.PORT || 8080, function() {
  console.log("Chess Server listening to 8081");
});

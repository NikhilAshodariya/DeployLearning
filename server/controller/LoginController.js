var User = require("../model/user/userModel.model.js");
var UserChessBoard = require("../model/user/userChessBoard.model.js");
var Board = require("../model/chess/Board.js")
var StringToChess = require("./StringToChess.js");


var SELFGLOBALS = require("../Globals/global.js");

var obj = {};

function signUp(req, res) {
  var user = new User();
  user.userName = req.body.userName;
  user.email = req.body.email;
  user.password = req.body.password;
  user.dob = req.body.dob;
  user.save().then((data) => {
    console.log(`User added to the DataBase ${data} Successful`);
  }, (data) => {
    console.log(`User cannot be added to the DataBase --${data}--`);
  });
}

function login(req, res) {
  User.findOne({
    email: req.body.email,
    password: req.body.password
  }).then((data) => {
    if (data == null) {
      console.log(`User Login Unsuccessful ${data}`);
      res.redirect("/Login");
    } else {
      req.session.email = req.body.email;
      var userBoard;
      var userMove;

      UserChessBoard.findOne({
        email: req.body.email
      }).then(data => {

        if (data != null) {
          let temp = data["chessBoard"];
          userMove = data["whichPlayerMove"];
          userBoard = StringToChess.getBoardFromBoardString(temp);
        } else {
          userBoard = new Board();
          userMove = "white";
        }
      }).then(data => {
        req.session.userId = SELFGLOBALS.incrementUserCount();
        SELFGLOBALS.addChessBoard(userBoard);
        req.session.whichPlayerMove = userMove;
        console.log(`User Login Successful ${data}`);
        res.redirect("/chessBoard")
      });
    }
  });
}

function signOut(req, res) {
  var newChessBoard = new UserChessBoard();
  newChessBoard.email = req.session.email;
  newChessBoard.chessBoard = JSON.stringify(SELFGLOBALS.getChessBoard(req.session.userId));
  newChessBoard.whichPlayerMove = req.session.whichPlayerMove;

  // deleting chessBoard of the user if it exists
  UserChessBoard.findOneAndRemove({
    email: req.session.email
  }).then(data => {
    if (data == null) {
      console.log("user does not exist to delete");
    } else {
      console.log(`User ChessBoard deleted for user ${data}`);
    }
  });

  // saving chessBoard of the user.
  newChessBoard.save().then(data => {
    console.log(`ChessBoard saved for the user ${req.session.email}`);
    req.session.destroy();
    res.redirect("/Login");
  }, data => {
    console.log(`ChessBoard cannot be save for the user ${req.session.email}`);
    console.log(data);
    req.session.destroy();
    res.redirect("/Login");
  });
}

obj.signUp = signUp;
obj.signIn = login;
obj.signOut = signOut;

module.exports = obj;

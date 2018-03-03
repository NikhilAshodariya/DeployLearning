var Piece = require("./Piece.js");
// var ChessBoard;
var KilledPieces;

function loadResources() {
  // ChessBoard = require("./ChessBoard.js");
  KilledPieces = require("./KilledPieces.js");
}

class Knight extends Piece {
  constructor(name, symbol, image) {
    super(name, symbol, image);
  }

  move(ChessBoard, from, to) {
    // Knight move code
    loadResources();

    function checkIfPathClear() {
      // There are eight places to check
      // if difference in number is one then in alphabet it should be two and vice versa
      var fromNumber = Number(from[0]);
      var fromAlphabet = from[1];
      var toNumber = Number(to[0]);
      var toAlphabet = to[1];

      var cellNumber = Math.abs(fromNumber - toNumber);
      var cellAlphabet = Math.abs(fromAlphabet.charCodeAt(0) - toAlphabet.charCodeAt(0));


      if (cellNumber == 1) {
        if (cellAlphabet == 2) {
          console.log("Valid knight move");
          return true;
        } else {
          console.log("Invalid Knight Move cell two columns should be moved");
          return false;
        }
      } else if (cellAlphabet == 1) {
        if (cellNumber == 2) {
          console.log("Valid knight move");
          return true;
        } else {
          console.log("Invalid Knight Move cell two columns should be moved");
          return false;
        }
      } else {
        console.log("Invalid Knight Move learn Knight Move");
        return false;
      }

    }

    if (checkIfPathClear() == true) {
      if (ChessBoard.getPiece(to) == undefined) {
        ChessBoard.setPiece(to, ChessBoard.getPiece(from));
        ChessBoard.setPiece(from, undefined);
        console.log("Move successful");
        return "valid";
      } else if (ChessBoard.getPiece(to) != undefined) {
        if (ChessBoard.getPiece(from).getType() == ChessBoard.getPiece(to).getType()) {
          console.log("same party elements can't be killed");
          return "invalid";
        }
        console.log("enemy killed in Knight");
        console.log("Move successful");
        var kp = ChessBoard.getPiece(to);
        KilledPieces[to] = kp;
        ChessBoard.setPiece(to, ChessBoard.getPiece(from));
        ChessBoard.setPiece(from, undefined);
        return "valid";
      } else {
        console.log("Some internal error has happen in Bishop");
        return "invalid";
      }
    } else {
      console.log("Path is invalid in Knight");
      return "invalid";
    }
  }
}

module.exports = Knight;

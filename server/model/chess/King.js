var Piece = require("./Piece.js");
// var ChessBoard;
var KilledPieces;

function loadResources() {
  // ChessBoard = require("./ChessBoard.js");
  KilledPieces = require("./KilledPieces.js");
}

class King extends Piece {

  constructor(name, symbol, image) {
    super(name, symbol, image);
    // this.name = name;
  }

  move(ChessBoard, from, to) {
    // here code of the King move will be coded\
    loadResources();

    function checkIfPathIsClear() {
      var fromNumber = Number(from[0]);
      var fromAlphabet = from[1];
      var toNumber = Number(to[0]);
      var toAlphabet = to[1];

      var checkNumber = Math.abs(fromNumber - toNumber);
      var checkAlphabet = Math.abs(fromAlphabet.charCodeAt(0) - toAlphabet.charCodeAt(0));
      if (checkNumber == 0) {
        if (checkAlphabet == 1) {
          return true;
        } else {
          console.log("move is invalid");
          return false;
        }
      } else if (checkNumber == 1) {
        if (checkAlphabet == 0) {
          return true;
        } else if (checkAlphabet == 1) {
          return true;
        } else {
          console.log("The move is invalid");
          return false;
        }
      } else {
        console.log("Invalid move learn King move");
        return false;
      }
    }

    if (checkIfPathIsClear() == true) {
      if (ChessBoard.getPiece(to) != undefined) {
        if (ChessBoard.getPiece(from).getType() == ChessBoard.getPiece(to).getType()) {
          console.log("same party elements can't be killed");
          return "invalid";
        }
        console.log("enemy killed");
        console.log("Move successful");
        var kp = ChessBoard.getPiece(to);
        KilledPieces[to] = kp;
        ChessBoard.setPiece(to, ChessBoard.getPiece(from));
        ChessBoard.setPiece(from, undefined);
        return "valid";
      } else {
        ChessBoard.setPiece(to, ChessBoard.getPiece(from));
        ChessBoard.setPiece(from, undefined);
        console.log("Move successful");
        return "valid";
      }
    } else {
      console.log("Invalid move learn King move");
      return "invalid";
    }
  }
}

module.exports = King;

var Pawn = require("./Pawn.js");
// var Board;
// var ChessBoard;
var KilledPieces;

function loadResources() {
  // Board = require("./Board.js");
  // ChessBoard = require("./ChessBoard.js");
  KilledPieces = require("./KilledPieces.js");
}


class WhitePawn extends Pawn {
  constructor(image) {
    super("WhitePawn", "&#9817;", image);
  }

  move(ChessBoard,from, to) {
    // return "valid";
    loadResources();

    var fromNumber = Number(from[0]);
    var fromAlphabet = from[1];
    var toNumber = Number(to[0]);
    var toAlphabet = to[1];

    if (((fromNumber + 2) == toNumber) && (fromAlphabet == toAlphabet)) {
      if (this.isFirstMove == true) {
        if (ChessBoard.getPiece((fromNumber + 1) + from[1]) == undefined) {
          if (ChessBoard.getPiece(to) == undefined) {
            ChessBoard.setPiece(to, ChessBoard.getPiece(from));
            ChessBoard.setPiece(from, undefined);
            console.log("Move successful");
            this.isFirstMove = false;
            return "valid";
          } else {
            console.log("invalid move since someone is present on location --> whitePawn ");
            return "invalid";
          }
        } else {
          console.log("invalid move since someone is in between --> whitePawn ");
          return "invalid";
        }
      } else {
        console.log("only two moves allowed for first move");
        return "invalid";
      }
    } else if (((fromNumber + 1) == toNumber) && (fromAlphabet == toAlphabet)) {
      if (ChessBoard.getPiece(to) == undefined) {
        ChessBoard.setPiece(to, ChessBoard.getPiece(from));
        ChessBoard.setPiece(from, undefined);
        console.log("Move successful");
        this.isFirstMove = false;
        return "valid";
      } else {
        if (fromAlphabet == toAlphabet) {
          console.log("someone present on location -> whitePawn");
          return "invalid";
        } else {
          console.log("cross Move valid only for killing Pawns");
          return "invalid";
        }
      }
    } else if (((fromNumber + 1) == toNumber) && (Math.abs(fromAlphabet.charCodeAt(0) - toAlphabet.charCodeAt(0)) == 1)) {
      if (ChessBoard.getPiece(to) != undefined) {
        if (ChessBoard.getPiece(from).getType() == ChessBoard.getPiece(to).getType()) {
          console.log("same party elements can't be killed in whitePawn");
          return "invalid";
        } else {
          var kp = ChessBoard.getPiece(to);
          KilledPieces[to] = kp;
          ChessBoard.setPiece(to, ChessBoard.getPiece(from));
          ChessBoard.setPiece(from, undefined);
          return "valid";
        }
      } else {
        console.log("cross move alllowed only for Killing Pieces");
        return "invalid";
      }
    } else {
      console.log("invalid Black Pawn Move");
      return "invalid";
    }
  }
}

module.exports = WhitePawn;

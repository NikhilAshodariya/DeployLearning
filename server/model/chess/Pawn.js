var Piece = require("./Piece.js");
var Board;
var ChessBoard;
var KilledPieces;

function loadResources() {
  Piece = require("./Piece.js");
  Board = require("./Board.js");
  ChessBoard = require("./ChessBoard.js");
  KilledPieces = require("./KilledPieces.js");
}

class Pawn extends Piece {
  constructor(name, symbol, image) {
    super(name, symbol, image);
    this.isFirstMove = true;
  }

  /*
  move(from, to) {
    // return "valid";
    loadResources();
    console.log("in Pawn from " + from[0]);
    console.log("in Pawn from " + from[1]);
    console.log("in Pawn to " + to[0]);
    console.log("in Pawn to " + to[1]);
    // console.log(ChessBoard instanceof Board);
    if (((Number(from[0]) + 2) == to[0]) && (from[1] == to[1])) {
      if (this.isFirstMove == true) {
        if (ChessBoard.getPiece("" + (Number(from[0]) + 1) + from[1]) == undefined) {
          if (ChessBoard.getPiece(to) != undefined) {
            console.log("enemy Killed");
            console.log("Move successful");
            this.isFirstMove = false;
            var kp = ChessBoard.getPiece(to);
            KilledPieces[to] = kp;
            ChessBoard.setPiece(to, ChessBoard.getPiece(from));
            ChessBoard.setPiece(from, undefined);
            return "valid";
          } else {
            ChessBoard.setPiece(to, ChessBoard.getPiece(from));
            ChessBoard.setPiece(from, undefined);
            console.log("Move successful");
            this.isFirstMove = false;
            return "valid";
          }
        } else {
          console.log("Invalid Move since someone in between");
        }
      } else {
        console.log("invalid Move since only first move can take 2 steps");
      }
    } else if (((Number(from[0]) + 1) == to[0]) && (from[1]) == to[1]) {
      if (ChessBoard.getPiece(to) != undefined) {
        console.log("enemy Killed");
        console.log("Move successful");
        this.isFirstMove = false;
        var kp = ChessBoard.getPiece(to);
        KilledPieces[to] = kp;
        ChessBoard.setPiece(to, ChessBoard.getPiece(from));
        ChessBoard.setPiece(from, undefined);
        return "valid";
      } else {
        ChessBoard.setPiece(to, ChessBoard.getPiece(from));
        ChessBoard.setPiece(from, undefined);
        console.log("Move successful");
        this.isFirstMove = false;
        return "valid";
      }
    } else {
      console.log("Move Unsuccessful learn pawn move direction");
    }

    // if (this.isFirstMove == true) {
    //   if (((Number(from[0]) + 2) == to[0]) && (from[1] == to[1])) {
    //     console.log("Pawn Move successful");
    //   } else if (((Number(from[0]) + 1) == to[0]) && (from[1] == to[1])) {
    //     var k = "" + (Number(from[0]) + 1) + from[1];
    //     if (ChessBoard.board.getPiece(k) == undefined) {
    //       console.log("Pawn Move successful");
    //     } else {
    //       console.log("Opposite Pawn Diead");
    //       // console.log("Pawn Move Unsuccessful");
    //     }
    //   } else {
    //     console.log("Pawn Move Wrong");
    //   }
    //   this.isFirstMove = false;
    // } else if (((Number(from[0]) + 1) == to[0]) && (from[1] == to[1])) {
    //   console.log("Pawn Move successful");
    //   // if (((from[0] + 1) == to[0]) && (from[1] == to[1])) {
    //   // }
    // } else {
    //   console.log("Pawn Move Unsuccessful");
    // }
    // here code of the Pawn move will be coded
  }
  */
}

module.exports = Pawn;

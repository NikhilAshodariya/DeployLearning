var Piece = require("./Piece.js");
// var ChessBoard;
// var KilledPieces;

function loadResources() {
  // ChessBoard = require("./ChessBoard.js");
  // KilledPieces = require("./KilledPieces.js");
}

class Bishop extends Piece {

  constructor(name, symbol, image) {
    super(name, symbol, image);
  }

  move(ChessBoard, from, to) {
    loadResources();

    function changeChar(c, amountToChange) {
      return String.fromCharCode(c.charCodeAt(0) + amountToChange);
    }

    function checkIfPathClear() {
      var fromNumber = Number(from[0]);
      var fromAlphabet = from[1];
      var toNumber = Number(to[0]);
      var toAlphabet = to[1];

      var steps = Math.abs(fromNumber - toNumber);
      var numberSteps = -1 * Math.sign(fromNumber - toNumber);
      var alphabetSteps = -1 * Math.sign(from[1].charCodeAt(0) - to[1].charCodeAt(0));

      var cellFormNumber = fromNumber;
      var cellFormAlphabet = fromAlphabet;
      var cell;

      for (var i = 1; i < steps; i++) {
        cellFormNumber = cellFormNumber + numberSteps;
        cellFormAlphabet = changeChar(cellFormAlphabet, alphabetSteps);
        cell = "" + cellFormNumber + cellFormAlphabet;
        if (ChessBoard.getPiece(cell) != undefined) {
          console.log("Path is not empty ");
          return false;
        }
      }
      // incrementing cell by one to get the proper location to check if correct move
      cellFormNumber = cellFormNumber + numberSteps;
      cellFormAlphabet = changeChar(cellFormAlphabet, alphabetSteps);
      cell = "" + cellFormNumber + cellFormAlphabet;
      if (cell == to) {
        return true;
      }
      return false;
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
        console.log("enemy killed in Bishop");
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
      console.log("Path is invalid learn Bishop Moves");
      return "invalid";
    }
    // for (var i = 0; i < ; i++) {
    //
    // }
  }
}
module.exports = Bishop;

var Piece = require("./Piece.js");
// var ChessBoard;
var KilledPieces;

function loadResources() {
  // ChessBoard = require("./ChessBoard.js");
  KilledPieces = require("./KilledPieces.js");
}


class Queen extends Piece {

  constructor(name, symbol, image) {
    super(name, symbol, image);
  }

  move(ChessBoard,from, to) {
    // here code of the Queen move will be coded
    loadResources();

    function changeChar(c, amountToChange) {
      return String.fromCharCode(c.charCodeAt(0) + amountToChange);
    }

    function checkIfPathClear() {
      var fromNumber = Number(from[0]);
      var fromAlphabet = from[1];
      var toNumber = Number(to[0]);
      var toAlphabet = to[1];

      var checkNumber = Math.abs(fromNumber - toNumber);
      var checkAlphabet = Math.abs(from[1].charCodeAt(0) - to[1].charCodeAt(0));
      if (checkNumber == 0) {
        // this is a horizontal move
        var steps = -1 * Math.sign(from[1].charCodeAt(0) - to[1].charCodeAt(0));
        var numberOfSteps = Math.abs(from[1].charCodeAt(0) - to[1].charCodeAt(0));
        var colAlphabet = from[1];
        for (var i = 1; i < numberOfSteps; i++) {
          colAlphabet = changeChar(colAlphabet, steps);
          if (ChessBoard.getPiece(from[0] + colAlphabet) != undefined) {
            return false;
          }
        }
        return true;
      } else if (checkAlphabet == 0) {
        // this is a vertical move
        var steps = -1 * Math.sign(fromNumber - toNumber);
        var numberOfSteps = Math.abs(fromNumber - toNumber);
        var rowNumber = fromNumber;
        for (var i = 1; i < numberOfSteps; i++) {
          rowNumber = rowNumber + steps;
          // ChessBoard.getPiece("" + rowNumber + from[1]);
          if (ChessBoard.getPiece("" + rowNumber + from[1]) != undefined) {
            return false;
          }
        }
        return true;
      } else {
        // this is a diagonal move
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
        console.log("enemy killed in Queen");
        console.log("Move successful");
        var kp = ChessBoard.getPiece(to);
        KilledPieces[to] = kp;
        ChessBoard.setPiece(to, ChessBoard.getPiece(from));
        ChessBoard.setPiece(from, undefined);
        return "valid";
      } else {
        console.log("Some internal error has happen in Queen");
        return "invalid";
      }
    } else {
      console.log("Wrong Move of Queen. Learn Queen Move");
      return "invalid"
    }
  }

}

module.exports = Queen;

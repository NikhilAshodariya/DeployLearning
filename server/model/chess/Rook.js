var Piece = require("./Piece.js");
// var ChessBoard;
var KilledPieces;

function loadResources() {
  // ChessBoard = require("./ChessBoard.js");
  KilledPieces = require("./KilledPieces.js");
}

class Rook extends Piece {
  constructor(name, symbol, image) {
    super(name, symbol, image);
  }

  move(ChessBoard,from, to) {
    loadResources();

    function checkIfStraightPathClear() {
      var steps = -1 * Math.sign(Number(from[0]) - Number(to[0]));
      var numberOfSteps = Math.abs(Number(from[0]) - Number(to[0]));
      // not checking if the final location is empty only checking the path
      var rowNumber = Number(from[0]);
      for (var i = 1; i < numberOfSteps; i++) {
        rowNumber = rowNumber + steps;
        // ChessBoard.getPiece("" + rowNumber + from[1]);
        if (ChessBoard.getPiece("" + rowNumber + from[1]) != undefined) {
          return false;
        }
      }
      return true;
    }

    function checkIfSidePathClear() {
      function changeChar(c, amountToChange) {
        return String.fromCharCode(c.charCodeAt(0) + amountToChange);
      }
      var steps = -1 * Math.sign(from[1].charCodeAt(0) - to[1].charCodeAt(0));
      var numberOfSteps = Math.abs(from[1].charCodeAt(0) - to[1].charCodeAt(0));

      // not checking if the final location is empty only checking the path
      var colAlphabet = from[1];
      for (var i = 1; i < numberOfSteps; i++) {
        colAlphabet = changeChar(colAlphabet, steps);
        if (ChessBoard.getPiece(from[0] + colAlphabet) != undefined) {
          return false;
        }
      }
      return true;
    }
    // checking if it is staright move or side move
    if ((from[1] == to[1]) && (Number(from[0]) != Number(to[0]))) {
      // checking if it is straight move
      if (checkIfStraightPathClear() == false) {
        console.log("someone present in between");
        return "invalid";
      }
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
    }


    // checking if it is side move
    if ((Number(from[0]) == Number(to[0])) && (from[1] != to[1])) {
      // checking if side path move
      if (checkIfSidePathClear() == false) {
        console.log("someone else present in between");
        return "invalid";
      }
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

    }


  }

  /*
    move(from, to) {
      function checkIfPathClear() {
        var steps = -1 * Math.sign(Number(from[0]) - Number(to[0]));
        var numberOfSteps = Math.abs(Number(from[0]) - Number(to[0]));
        // not checking if the final location is empty only checking the path
        var rowNumber = Number(from[0]);
        for (var i = 1; i < numberOfSteps; i++) {
          rowNumber = rowNumber + steps;
          // ChessBoard.getPiece("" + rowNumber + from[1]);
          if (ChessBoard.getPiece("" + rowNumber + from[1]) != undefined) {
            return false;
          }
        }
        return true;
      }

      // Rook move code
      loadResources();
      if (Number(to[0]) > 0 && Number(to[0]) <= 8) {
        if (from[1] == to[1]) {
          if (checkIfPathClear() == false) {
            console.log("someone present in between");
            return "invalid";
          }
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
          console.log("Rook can move only in staright line");
          return "invalid";
        }
        return "valid";
      } else {
        return "invalid";
      }
    }
    */
}

module.exports = Rook;

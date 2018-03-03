var SELFGLOBALS = require("../Globals/global.js");
var Board = require("../model/chess/Board.js");

function resetChessBoard(request, response) {
  SELFGLOBALS.addChessBoardAtIndex(request.session.userId, new Board());
  request.session.whichPlayerMove = "white";
  return true;
}

var obj = function() {
  return {
    resetChessBoard: resetChessBoard
  }
}

module.exports = obj();

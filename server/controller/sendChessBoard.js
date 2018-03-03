var ChessBoard;
var SELFGLOBALS;


function loadResource(req, res) {
  SELFGLOBALS = require("../Globals/global.js");
}

function nextHeader(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

function getChessPosition(req, res) {
  loadResource(req, res);
  var toSendData = {};
  var i = 8;
  var userID = req.session.userId;
  ChessBoard = SELFGLOBALS.getChessBoard(userID);
  for (var i = 8; i > 0; i--) {
    var k = 0;
    for (var j = "a"; k < 8; k++) {
      var intermediateData = i + j;
      var piece = ChessBoard.getPiece(intermediateData);
      if (piece != undefined) {
        toSendData[intermediateData] = ChessBoard.getPiece(intermediateData).getSymbol();
      } else {
        toSendData[intermediateData] = undefined;
      }
      j = nextHeader(j);
    }
  }
  return toSendData;
}

var resources = {
  "getChessPosition": getChessPosition
}
module.exports = resources;

var whichMovePiece;

var obj = function() {
  return {
    movePiece: movePiece,
    getWhichMovePiece: getWhichMovePiece
  }
}

function getWhichMovePiece(req, res) {
  return req.session.whichPlayerMove;
}

function movePiece(request, response) {
  var SELFGLOBALS = require("../Globals/global.js");

  var from = request.params.from;
  var to = request.params.to;

  var chessBoard = SELFGLOBALS.getChessBoard(request.session.userId);
  var piece = SELFGLOBALS.getChessBoard(request.session.userId).getPiece(from);
  if (piece == undefined || piece == null) {
    return "invalid";
  } else if (chessBoard.getPiece(from).getType().toLowerCase() == request.session.whichPlayerMove) {
    var output = piece.move(chessBoard,from, to);
    if (output == "valid") {
      if (request.session.whichPlayerMove == "white") {
        request.session.whichPlayerMove = "black";
      } else {
        request.session.whichPlayerMove = "white";
      }
    }
    return output;
  } else {
    return "invalid";
  }
}

module.exports = obj();

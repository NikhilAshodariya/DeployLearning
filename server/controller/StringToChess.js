'use strict';
var Board = require("../model/chess/Board.js");
var WhiteKing = require("../model/chess/WhiteKing.js");
var WhiteQueen = require("../model/chess/WhiteQueen.js");
var WhiteRook = require("../model/chess/WhiteRook.js");
var WhiteBishop = require("../model/chess/WhiteBishop.js");
var WhiteKnight = require("../model/chess/WhiteKnight.js");
var WhitePawn = require("../model/chess/WhitePawn.js");
var BlackKing = require("../model/chess/BlackKing.js");
var BlackQueen = require("../model/chess/BlackQueen.js");
var BlackRook = require("../model/chess/BlackRook.js");
var BlackBishop = require("../model/chess/BlackBishop.js");
var BlackKnight = require("../model/chess/BlackKnight.js");
var BlackPawn = require("../model/chess/BlackPawn.js");



function getBoardFromBoardString(objectString) {
  let savedBoard = JSON.parse(objectString)["board"];
  var keys = Object.keys(savedBoard);
  var chessBoard = new Board();
  // making chessBoard empty
  for (var tileName of keys) {
    chessBoard.setPiece(tileName, undefined);
  }

  for (var tileName of keys) {
    if (savedBoard[tileName]["piece"] == undefined) {
      chessBoard.setPiece(tileName, undefined);
    } else if (savedBoard[tileName]["piece"]["name"] == "BlackBishop") {
      chessBoard.setPiece(tileName, new BlackBishop());
    } else if (savedBoard[tileName]["piece"]["name"] == "BlackKing") {
      chessBoard.setPiece(tileName, new BlackKing());
    } else if (savedBoard[tileName]["piece"]["name"] == "BlackKnight") {
      chessBoard.setPiece(tileName, new BlackKnight());
    } else if (savedBoard[tileName]["piece"]["name"] == "BlackPawn") {
      chessBoard.setPiece(tileName, new BlackPawn());
    } else if (savedBoard[tileName]["piece"]["name"] == "BlackQueen") {
      chessBoard.setPiece(tileName, new BlackQueen());
    } else if (savedBoard[tileName]["piece"]["name"] == "BlackRook") {
      chessBoard.setPiece(tileName, new BlackRook());
    } else if (savedBoard[tileName]["piece"]["name"] == "BlackPawn") {
      chessBoard.setPiece(tileName, new BlackPawn());
    } else if (savedBoard[tileName]["piece"]["name"] == "WhiteBishop") {
      chessBoard.setPiece(tileName, new WhiteBishop());
    } else if (savedBoard[tileName]["piece"]["name"] == "WhiteKing") {
      chessBoard.setPiece(tileName, new WhiteKing());
    } else if (savedBoard[tileName]["piece"]["name"] == "WhiteKnight") {
      chessBoard.setPiece(tileName, new WhiteKnight());
    } else if (savedBoard[tileName]["piece"]["name"] == "WhitePawn") {
      chessBoard.setPiece(tileName, new WhitePawn());
    } else if (savedBoard[tileName]["piece"]["name"] == "WhiteQueen") {
      chessBoard.setPiece(tileName, new WhiteQueen());
    } else if (savedBoard[tileName]["piece"]["name"] == "WhiteRook") {
      chessBoard.setPiece(tileName, new WhiteRook());
    } else if (savedBoard[tileName]["piece"]["name"] == "WhitePawn") {
      chessBoard.setPiece(tileName, new WhitePawn());
    } else {
      console.log("Some Problem has occured");
    }

  }

  return chessBoard;
}

var StringToChess = function(){
  return{
    getBoardFromBoardString:getBoardFromBoardString
  }
}

module.exports = StringToChess();

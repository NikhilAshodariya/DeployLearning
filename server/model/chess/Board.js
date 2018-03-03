var WhiteKing = require("./WhiteKing.js");
var WhiteQueen = require("./WhiteQueen.js");
var WhiteRook = require("./WhiteRook.js");
var WhiteBishop = require("./WhiteBishop.js");
var WhiteKnight = require("./WhiteKnight.js");
var WhitePawn = require("./WhitePawn.js");
var BlackKing = require("./BlackKing.js");
var BlackQueen = require("./BlackQueen.js");
var BlackRook = require("./BlackRook.js");
var BlackBishop = require("./BlackBishop.js");
var BlackKnight = require("./BlackKnight.js");
var BlackPawn = require("./BlackPawn.js");
var Tile = require("./Tile.js");

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

class Board {
  constructor() {
    this.board = {};
    this.loadInitialData();
  }

  loadInitialData() {

    // creating empty Tile
    for (var i = 8; i > 0; i--) {
      // this.board[];
      var temp = "a";
      for (var j = 0; j < 8; j++) {
        this.board["" + i + temp] = new Tile();
        temp = nextChar(temp);
      }
    }
    this.board["8a"].setPiece(new BlackRook());
    this.board["8b"].setPiece(new BlackKnight());
    this.board["8c"].setPiece(new BlackBishop());
    this.board["8d"].setPiece(new BlackQueen());
    this.board["8e"].setPiece(new BlackKing());
    this.board["8f"].setPiece(new BlackBishop());
    this.board["8g"].setPiece(new BlackKnight());
    this.board["8h"].setPiece(new BlackRook());

    // placing Black Pawn
    var temp = "a";
    for (var i = 0; i < 8; i++) {
      this.board["" + 7 + temp].setPiece(new BlackPawn());
      temp = nextChar(temp);
    }

    // placing White Pieces
    temp = "a";
    for (var i = 0; i < 8; i++) {
      this.board["" + 2 + temp].setPiece(new WhitePawn());
      temp = nextChar(temp);
    }

    this.board["1a"].setPiece(new WhiteRook());
    this.board["1b"].setPiece(new WhiteKnight());
    this.board["1c"].setPiece(new WhiteBishop());
    this.board["1d"].setPiece(new WhiteQueen());
    this.board["1e"].setPiece(new WhiteKing());
    this.board["1f"].setPiece(new WhiteBishop());
    this.board["1g"].setPiece(new WhiteKnight());
    this.board["1h"].setPiece(new WhiteRook());
  }

  getChessBoard() {
    return this.board;
  }

  getTile(data){
    return this.board[data];
  }

  getPiece(data){
    return this.board[data].getPiece();
  }

  setPiece(location, piece){
    this.board[location].setPiece(piece);
  }
}

module.exports = Board;

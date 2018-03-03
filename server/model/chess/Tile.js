class Tile {
  constructor(piece) {
    this.piece = piece;
  }

  setPiece(piece) {
    this.piece = piece;
  }

  getPiece() {
    return this.piece;
  }
}

module.exports = Tile;

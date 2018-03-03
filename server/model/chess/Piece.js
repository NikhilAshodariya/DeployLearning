class Piece {

  constructor(name, symbol, image) {
    this.name = name;
    this.symbol = symbol;
    this.image = image;
    if (this.name.toLowerCase().includes("black")) {
      this.type = "Black";
    } else if (this.name.toLowerCase().includes("white")) {
      this.type = "White"
    } else {
      this.type = "Some Error has Occured";
    }
  }

  move(toMove) {
    console.log("in Pieces Move");
  }

  getSymbol() {
    return this.symbol;
  }

  getName() {
    return this.name;
  }

  getImage() {
    return this.image;
  }

  getType(){
    return this.type;
  }

}

module.exports = Piece;

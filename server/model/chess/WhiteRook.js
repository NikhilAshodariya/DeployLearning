var Rook = require("./Rook.js");

class WhiteRook extends Rook {
  constructor(image) {
    super("WhiteRook", "&#9814;", image);
  }
}

module.exports = WhiteRook;

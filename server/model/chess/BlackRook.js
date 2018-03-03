var Rook = require("./Rook.js");

class BlackRook extends Rook {
  constructor(image) {
    super("BlackRook", "&#9820;", image);
  }
}

module.exports = BlackRook;

var King = require("./King.js");

class WhiteKing extends King {
  constructor(image) {
    super("WhiteKing", "&#9812;", image);
  }

}

module.exports = WhiteKing;

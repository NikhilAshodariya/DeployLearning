var King = require("./King.js");

class BlackKing extends King {
  constructor(image) {
    super("BlackKing", "&#9818;", image);
  }

}

module.exports = BlackKing;

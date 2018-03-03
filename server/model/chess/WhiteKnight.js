var Knight = require("./Knight.js");

class WhiteKnight extends Knight {
  constructor(image) {
    super("WhiteKnight", "&#9816;", image);
  }
}

module.exports = WhiteKnight;

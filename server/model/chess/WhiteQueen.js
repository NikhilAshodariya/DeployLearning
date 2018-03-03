var Queen = require("./Queen.js");

class WhiteQueen extends Queen {

  constructor(image) {
    super("WhiteQueen", "&#9813;", image);
  }

}

module.exports = WhiteQueen;

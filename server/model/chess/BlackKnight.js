var Knight = require("./Knight.js");

class BlackKnight extends Knight {
  constructor(image) {
    super("BlackKnight", "&#9822;", image);
  }
}

module.exports = BlackKnight;

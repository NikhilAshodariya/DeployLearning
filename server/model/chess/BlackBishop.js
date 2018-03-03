var Bishop = require("./Bishop.js");

class BlackBishop extends Bishop{
  constructor(image){
    super("BlackBishop","&#9821;", image);

  }
}

module.exports = BlackBishop;

var Bishop = require("./Bishop.js");

class WhiteBishop extends Bishop{
  constructor(image){
    super("WhiteBishop","&#9815;",image);
  }
}

module.exports = WhiteBishop;

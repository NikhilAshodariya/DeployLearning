var mongoose = require("mongoose");

var userChessBoardSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  chessBoard: {
    type: Object,
    required: true
  },

  whichPlayerMove:{
    type: String,
    required: true,
    default: "white"
  }
});

module.exports = mongoose.model('UserChessBoard', userChessBoardSchema);

var allUserChessBoard = [];
var totalUserSignedIn = -1;

function addChessBoard(chessBoard) {
  allUserChessBoard[totalUserSignedIn] = chessBoard;
}

function addChessBoardAtIndex(index, chessBoard) {
  allUserChessBoard[index] = chessBoard;
}

function getChessBoard(userId) {
  if ((userId == undefined) || (typeof(userId) != "number")) {
    throw new Error("userId is = " + userId);
  }
  return allUserChessBoard[userId];
}

function deleteChessBoard(userIndex) {
  var temp = allUserChessBoard.splice(userIndex);
  allUserChessBoard = allUserChessBoard.concat(temp.slice(1));
}

function incrementUserCount() {
  totalUserSignedIn = totalUserSignedIn + 1;
  return totalUserSignedIn;
}

var obj = {
  addChessBoard: addChessBoard,
  addChessBoardAtIndex: addChessBoardAtIndex,
  deleteChessBoard: deleteChessBoard,
  incrementUserCount: incrementUserCount,
  getChessBoard: getChessBoard
}

module.exports = obj;

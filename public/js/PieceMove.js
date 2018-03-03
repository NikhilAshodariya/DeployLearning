$(document).ready(function() {
  $("#pieceMoveSubmitButton").click(pieceMove);
  setWhichPlayerMove();
});

function pieceMove(from, to) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
      arr = JSON.parse(xhttp.responseText);
      console.log(arr);
      if (arr["moveStatus"] == "valid") {
        var data = from;
        var sourcePieceData = $(data).html();
        $(data).html("");
        var data = to;
        $(data).html(sourcePieceData);
      } else {
        alert("move is not valid dude");
      }
      loadChessBoard();
      setWhichPlayerMove();
    }
  };
  xhttp.open("GET", "/chessBoard/move/" + from + "/" + to, true);
  xhttp.send();
  console.log("from in piece Move " + from);
  console.log("to in piece Move " + to);
}

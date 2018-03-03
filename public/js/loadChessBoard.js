function loadChessBoard() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
      arr = JSON.parse(xhttp.responseText);
      // console.log(arr);
      var CB = arr["chessBoard"];
      populateChessBoard(CB);
    }
  };
  xhttp.open("GET", "/chessBoard/getChessBoard", true);
  xhttp.send();
};

function setWhichPlayerMove() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
      arr = JSON.parse(xhttp.responseText);
      // console.log(arr);
      var data = arr["whichPlayerMove"];
      $("#playerMoveStatus").html(data+" Player Move")
    }
  };
  xhttp.open("GET", "/chessBoard/getWhichPlayerMove", true);
  xhttp.send();
}

function nextHeader(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

function populateChessBoard(CB) {
  var i = 8;
  for (var i = 8; i > 0; i--) {
    var k = 0;
    for (var j = "a"; k < 8; k++) {
      var intermediateData = i + j;
      if (CB[intermediateData] != undefined) {
        $("#" + intermediateData).html(CB[intermediateData]);
      } else {
        $("#" + intermediateData).html("");
      }
      j = nextHeader(j);
    }
  }
}

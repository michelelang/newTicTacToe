var ticTacToe = {};

ticTacToe.init = function () {
    ticTacToe.currentPlayer = "red";
    ticTacToe.playerIndicator = $(".current-player-indicator");
    ticTacToe.playerIndicator.addClass(ticTacToe.currentPlayer);
    ticTacToe.boxes = $(".box");
    ticTacToe.boxes.on("click", ticTacToe.boxClicked);
};

ticTacToe.boxClicked = function(){
   $(this).addClass(ticTacToe.currentPlayer);
   ticTacToe.playerIndicator.toggleClass("red blue");
   ticTacToe.currentPlayer = ticTacToe.currentPlayer === "red" ? "blue" : "red";

//    if(ticTacToe.currentPlayer === "red") {
//     ticTacToe.currentPlayer = "blue";
//    }
//    else {
//        ticTacToe.currentPlayer = "red";
//    }
};

$(document).ready(function () {
    ticTacToe.init();
});


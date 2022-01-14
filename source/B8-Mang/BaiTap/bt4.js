
// const n = 25;
let arrs = new Array();
let a = document.getElementById('show');
//document.write("Bàn cờ ca rô <br>");

let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = new Array(".", ".", ".", ".", ".");
}

for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}

data += "<br/><br/><input type='button' value='Player1' onclick='changeValue1()'>";
//data += "<br/><br/><input type='button' value='Player2'onclick='changeValue2()'>";
a.innerHTML= data;


function changeValue1() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
            if(board[i][j] =="x" &&  board[i][j+1] == "x" && board[i][j+2] == "x" ){
                alert("Player 1 Win");
            }
            else if(board[i][j] =="x" &&  board[i+1][j] == "x" && board[i]+2[j] == "x" ){
                alert("Player 1 Win");
            }
            else if(board[i][j] =="x" &&  board[i+1][j+1] == "x" && board[i]+2[j+2] == "x" ){
                alert("Player 1 Win");
            }
        
        }
    }
   // data += "<br/><br/><input type='button' value='Player1' onclick='changeValue1()'>";
    data += "<br/><br/><input type='button' value='Player2' onclick='changeValue2()'>";
    a.innerHTML = "<hr/>" + data;
}

function changeValue2() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "O";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
            if(board[i][j] =="O" &&  board[i][j+1] == "O" && board[i][j+2] == "O"  ){
                alert("Player 2 Win");
                refresh();
            }
            else if(board[i][j] =="O" &&  board[i+1][j] == "O" && board[i]+2[j] == "O" ){
                alert("Player 2 Win");
            }
            else if(board[i][j] =="O" &&  board[i+1][j+1] == "O" && board[i]+2[j+2] == "O" ){
                alert("Player 2 Win");
            }
        }
    }
    data += "<br/><br/><input type='button' value='Player1' onclick='changeValue1()'>";
    // data += "<br/><br/><input type='button' value='Player2' onclick='changeValue2()'>";
    a.innerHTML = "<hr/>" + data;
}

// for(let i =0; i< 5; i++){
//     for( let j =0 ;j< 5; j++){
//         if(board[i][j] == board[i][j+1] &&  board[i][j+1] == board[i][j+2] ){

//         }
//     }
// }

function refresh(){

for (let i = 0; i < 5; i++) {
    board[i] = new Array(".", ".", ".", ".", ".");
}

for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}

data += "<br/><br/><input type='button' value='Player1' onclick='changeValue1()'>";
//data += "<br/><br/><input type='button' value='Player2'onclick='changeValue2()'>";
a.innerHTML= data;
}
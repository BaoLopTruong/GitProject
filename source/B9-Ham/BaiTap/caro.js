
//B1: Tạo bàn cờ

const CELLS = 10;
const COLUMS = 10;
const arr = [];
let player = 1;
let isgameOVer = false;
function drawGameBoard() {
    let html = "";
    for (let i = 0; i < CELLS; i++) {
        arr[i] = []
        html += '<tr>';
        for (let j = 0; j < COLUMS; j++) {
            arr[i][j] = '*';
            html += '<td id="cell-' + i + '-' + j + '"' + 'onclick="play(' + i + ',' + j + ',' + ')">';
            html += '</td>'
        }
        html += '</tr>';
    }
    document.getElementById('game-board').innerHTML = html;
}
drawGameBoard();


function play(x, y) {
    if (gameOVer != true) {


        if (arr[x][y] == '*') {


            if (player == 1) {
                document.getElementById('cell-' + x + '-' + y).innerHTML = "X";
                player = 2;
                arr[x][y] = 'X';
            }
            else {
                document.getElementById('cell-' + x + '-' + y).innerHTML = "O";
                player = 1;
                arr[x][y] = 'O';
            }
            checkWin(x, y);
        }
    }

}


function checkWin(x, y) {
    //check theo chiêu ngang vè sau ô đang đánh( đằng trước ô đó)
    let cell = document.getElementById('cell-' + x + '-' + y);
    let i = 1;
    var count = 1;
    while (y - i >= 0 && arr[x][y - i] == cell.innerHTML) {
        count++;
        i++;
    }
    //check theo chiêu ngang vè trước ô đang đánh(ô tiếp theo  ô đó)
    let j = 1;
    while (y + j < COLUMS && arr[x][y + j] == cell.innerHTML) {
        count++;
        j++;
    }
    gameOVer(count);
    //check chiều dọc
    var count2 = 1;
    let m = 1;
    while (x - m >= 0 && arr[x - m][y] == cell.innerHTML) {
        count2++;
        m++;
    }
    let n = 1;
    while (x - n >= 0 && x + n < CELLS && arr[x + n][y] == cell.innerHTML) {
        count2++;
        n++;
    }
    gameOVer(count2);
    //check theo chiều nghiêng hướng lên góc trái
    var count3 = 1;
    let h = 1;
    while (x - h >= 0 && y - h >= 0 && arr[x - h][y - h] == cell.innerHTML) {
        count3++;
        h++;
    }
    //check theo chiều nghiêng hướng xuống góc phải
    let k = 1;
    while (x + k < CELLS && y + k < COLUMS && arr[x + k][y + k] == cell.innerHTML) {
        count3++;
        k++;
    }
    gameOVer(count3);
    //check theo chiều nghiêng hướng xuống góc trái
    var count4 = 1;
    let g = 1;
    while (x + g < CELLS && y - g >= 0 && arr[x + g][y - g] == cell.innerHTML) {
        count4++;
        g++;
    }
    //check theo chiều nghiên hướng lên góc phải
    let l = 1;
    while (x - l >= 0 && y + l < COLUMS && arr[x - l][y + l] == cell.innerHTML) {
        count4++;
        l++;
    }
    gameOVer(count4);


}


function gameOVer(count) {
    if (count == 5) {
        isgameOVer = true;
        alert("Win");
    }
}



function reset() {

    isgameOVer = true;
    arr = [];
    drawGameBoard();
}
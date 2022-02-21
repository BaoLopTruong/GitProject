const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ROW = 18; // số cột
const COL = 10; // số hàng
const SQ = 40; // kích thước của một ô
const COLOR = "WHITE"; // color của ô

let score =0;
let high_score = score;


function drawSquare(x, y, color){
    // chọn màu cho hình
    ctx.fillStyle = color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
    // hình vuống thứ 2
    ctx.strokeStyle = '#524A4E';
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

// tạo mảng 2 chiều chứa gameboard

let board = [];
for(let r =0; r< ROW; r++){
    board[r] = [];
    for(let c = 0; c < COL; c++){
        board[r][c] = COLOR;
    }
}
//console.log(board);

function drawBoard(){
    for(let r =0; r< ROW; r++){
        for(let c = 0; c < COL; c++){
           drawSquare(c, r, board[r][c]);
        }
    }
}

// drawBoard();


const PIECES = [
    [Z, "red"],
    [S, "green"],
    [T, "yellow"],
    [O, "blue"],
    [L, "purple"],
    [I, "cyan"],
    [J, "orange"],
];

function randomPiece(){
    let r = Math.floor(Math.random() * PIECES.length);
    return new Piece(PIECES[r][0],PIECES[r][1] );
}

let p = randomPiece();
 
 //console.log(p)

 // viest sự kiện click phím mũi tên
document.addEventListener('keydown', function(e){
    if(e.keyCode == 37){
        p.moveLeft();
    }
    else if(e.keyCode == 39){
        p.moveRight();
    }
    else if(e.keyCode == 38){
        p.rotate();
    }
    else if(e.keyCode == 40){
        p.moveDown();
    }
})


let gameOver = false;
let interval;

function drop(){
    interval = setInterval(function(){
        if(! gameOver){
            p.moveDown();
        }else{
            clearInterval(interval);
        }
    }, 1500)
}
//drop();


function Reloadgame(){
    document.getElementById('reloadgame').style.display = "none";
    document.getElementById('startgame').style.display = "block";
    location.reload();

}

drawBoard();
function StartGame(){
   
    document.getElementById('startgame').style.display = "none";
    drop();
}
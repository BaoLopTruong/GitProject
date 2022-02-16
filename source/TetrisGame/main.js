const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ROW = 18; // số cột
const COL = 10; // số hàng
const SQ = 40; // kích thước của một ô
const COLOR = "WHITE"; // color của ô



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

drawBoard();

// start

class Piece{
    constructor(tetromino, color){
        this.tetromino = tetromino;
        this.color = color;

        this.tetrominoN = 0;
        this.activeTetromino = this.tetromino[this.tetrominoN];

        this.x = 3;
        this.y = -2;
    }

    fill(color){
        for(let r = 0; r < this.activeTetromino.length; r++){
            for(let c = 0; c < this.activeTetromino.length; c++){
                if(this.activeTetromino[r][c]){
                    drawSquare(this.x + c, this.y + r, color);
                }
            }
        }
    }


    draw(){
        this.fill(this.color);
    }
    unDraw(){
        this.fill(COLOR);
    }
    
    moveDown(){
        if(!this.collision(0, 1, this.activeTetromino)){
            this.unDraw();
            this.y ++;
            this.draw();
        }
        else{
            p.randomPiece();
        }
      
    }
      
    moveLeft(){
        if(!this.collision(-1, 0, this.activeTetromino)){
            this.unDraw();
            this.x --;
            this.draw();
        }
        
    }
    moveRight(){
           if(!this.collision(1, 0, this.activeTetromino)){
            this.unDraw();
            this.x ++;
            this.draw();
           } 
    }

    lock(){
        for(let r = 0; r < this.activeTetromino.length; r++){
            for(let c = 0; c < this.activeTetromino.length; c++){
                if(!this.activeTetromino[r][c]){
                    continue;
                }

                if(this.y + r < 0){
                    alert("Game Over");
                    gameOver = true;
                    break;
                }

                // khóa chuyển động
                board[this.y + r][this.x + c] = this.color;

            }
        }
    }

    rotate(){
        let nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
        let move = 0;
        // kiểm tra va chạm khi xoay hình
        if(this.collision(0, 0, nextPattern)){
            if(this.x > COL /2){
                move = -1;
            }
            else{
                move = 1;
            }
        }

        if(!this.collision(0, 0, nextPattern)){
            this.unDraw();
            this.x += move;
            this.tetromino = (this.tetrominoN +1) % this.tetromino.length;
            this.activeTetromino = this.tetromino[this.tetrominoN];
            this.draw();
        }

    }
    
    collision(x, y, piece){
        for(let r = 0 ; r < piece.length; r++){
            for(let c = 0; c < piece.length; c++){
                if(!piece[r][c]){
                    continue;
                }

                let newX = this.x + c + x;
                let newY = this.y + r + y;

                if(this.x < 0 || this.x > COL || this.y > ROW){
                    return true;
                }

                if(this.y < 0){
                    continue;
                }

                if(board[this.y][this.x] != COLOR){
                    return true;
                }

            }
        }
        return false;
    }

}

// the end
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
 console.log(p)

 // viest sự kiện click phím mũi tên
document.addEventListener('keydown', function(e){
    if(e.keyCode == 37){
        p.moveLeft();
    }
    else if(e.keyCode == 39){
        p.moveRight();
    }
    else if(e.keyCode == 38){
        //p.rotate();
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
    }, 1000)
}
drop();
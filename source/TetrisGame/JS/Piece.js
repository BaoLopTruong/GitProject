
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
            this.lock();
            p = randomPiece();
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
                    document.getElementById('reloadgame').style.display = "block";
                    if(score > high_score)
                    {
                        high_score = score;
                        document.getElementById('high-score').innerHTML = high_score;
                    }
                    break;
                }

                // khóa chuyển động
                board[this.y + r][this.x + c] = this.color;

            }
        }

        // xu ly tinh diem
        for(let r = 0; r < ROW; r++){
            let isFull =true;
            for(let c = 0; c < COL; c++){
                isFull = isFull && (board[r][c] != COLOR);
            }

            if(isFull){
                for(let y = r; y > 1; y--){
                    for( let c = 0; c < COL; c++){
                        board[y][c] = board[y -1][c];
                    }
                }
                for(let c= 0; c < COL; c++){
                    board [0][c] = COLOR;
                }

                score += 10;
            }
        }
        document.getElementById('score').innerHTML = score;

        drawBoard();
        //document.querySelector('#score').innerText = sorce;
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
            this.tetrominoN = (this.tetrominoN +1) % this.tetromino.length;
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

                if(this.x + c + x < 0 || this.x + c + x >= COL || this.y + r + y >= ROW){
                    return true;
                }

                if(this.y + r + y < 0){
                    continue;
                }

                if(board[newY][newX] != COLOR){
                    return true;
                }

            }
        }
        return false;
    }
    clear(){
        for(let r = 0; r < this.activeTetromino.length; r++){
            for(let c = 0; c < this.activeTetromino.length; c++){
                if(this.activeTetromino[r][c]){
                    drawSquare(this.x + c, this.y + r, COLOR);
                    this.unDraw();
                }
            }
        }
    }

}
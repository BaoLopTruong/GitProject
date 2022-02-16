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
        for(let r =0; r < this.activeTetromino.length; r++){
            for(let c= 0; c< this.activeTetromino.length; c++){
                if(this.activeTetromino[r][c]){
                    drawSquare(this.x + c, this.y +r, color);
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
        this.unDraw();
        this.y ++;
        this.draw();
    }
      
    moveLeft(){
        if(!this.collision(1, 0, this.activeTetromino)){
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

                if(newX < 0 || newX >= COL || newY >= ROW){
                    return true;
                }

                if(newY < 0){
                    continue;
                }

                if(board[newY][newX] != COLOR){
                    return true;
                }

            }
        }
        return false;
    }

}
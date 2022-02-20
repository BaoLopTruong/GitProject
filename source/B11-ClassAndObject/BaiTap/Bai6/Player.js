class Player {
    constructor(player) {
      this.player = player;
    }
    play(i, j, player) {
      let input = document.getElementById(`cell-${i}-${j}`);
          if(player == 1) {
              input.innerHTML = "X";
              input.style.color = 'blue';
              arr[i][j] = "X";
              player = 2;
          } else {
              input.innerHTML = "O";
              input.style.color = 'red';
              arr[i][j] = "O";
              player = 1;
          }
    }
}
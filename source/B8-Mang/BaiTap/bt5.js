let arr = [
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1]
]
let sum = 0;
for (let j = 0; j < arr[0].length; j++) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][j] == 0) {
            break;
        } else {
            sum += arr[i][j];
        }
    }
}
document.write(sum);

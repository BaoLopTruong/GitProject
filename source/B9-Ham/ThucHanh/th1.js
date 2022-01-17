function processConfirm(answer) {
    let result = "";
    if (answer) {
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }
    return result;
}

let confirmAnswer = confirm("Shall we play a game?");
//hàm confrim trả về giá trị true or false
let theAnswer = processConfirm(confirmAnswer);
//gọi hàm confirm và truyền tham số confirm answer
alert(theAnswer);
//hiển thị kết quả
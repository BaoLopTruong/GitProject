function answerfunction(){
    let a = document.getElementById('input').value;
    if(a==""){
        alert("vui lòng nhập đáp án của bạn");
    }
    else if(a == "ECMAScript"){
        alert("Right!");
    }
    else{
        alert("Didn’t know? ECMAScript!");
        document.getElementById('input').value = "";
    }
}
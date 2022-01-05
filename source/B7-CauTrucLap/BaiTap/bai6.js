function myfunction(){
    var a = parseInt(document.getElementById('inputa').value);
    var b =  parseInt(document.getElementById('inputb').value);
    var S= 0;
    if(a < b){
        for(i = a; i<=b; i++){
            S = S + i;
        }
        document.getElementById('kqua').innerHTML ="Kết quả: "+S;
    }
    else{
        alert("Giá trị cuối phải lớn hơn giá trị đầu. Vui lòng nhập lại.")
    }
    
}

let tudien= ['go','hello','today','monday','goodbye','codegym','IT'];

function tim(value){
    for(let i =0 ; i< tudien.length; i++){
        if(tudien[i] == value){
        console.log(value);
        }
    }
return value;
}

function translefunction(){
    let input = document.getElementById('transle').value;
    let kqua= document.getElementById('results');
    tim(input);

    if(input == "go"){
        kqua.innerHTML = "đi";
    }
    else if(input == "hello"){
        kqua.innerHTML = "Xin chào";
    }
    else if(input == "today"){
        kqua.innerHTML = "hôm nay";
    }
    else if(input == "monday"){
        kqua.innerHTML = "thứ hai";
    }
    else if(input == "goodbye"){
        kqua.innerHTML = "tạm biệt";
    }
    else if(input == "codegym"){
        kqua.innerHTML = "kho0as hoc code gym";
    }
    else if(input == "IT"){
        kqua.innerHTML = "CNTT";
    }
    else{
        kqua.innerHTML = "not found";
    }

}
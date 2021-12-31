function shownumber(number){
    document.getElementById('input').value += number;
}


function kqua(){

    let input = document.getElementById('input').value;
    result = eval(input); // eval ("1+2") =3
    document.getElementById('input').value = result;
}


function clearInput(){
    document.getElementById('input').value = "";
}
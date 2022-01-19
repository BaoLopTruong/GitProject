function checkinput(input){
    if(input < 0 || input > 10000)
    {
     return false;
    }
    return true;
}

function kiemtrasnt(snt){
    let flag = true;
    if(snt == 2){
        flag = true;
        
    }
    else if(snt < 2){
        flag = false;
        document.getElementById('results').innerHTML =snt + " không là số nguyên tố";
    }
    else if(snt % 2 == 0){
        flag = false;
        
    }
    else{
        for (let i = 3; i < Math.sqrt(snt); i+=2)
        {
            if (snt % i == 0){
                flag = false;
                break;
            }
        }
    }

    if (flag == true){
        document.getElementById('results').innerHTML = snt + " là số nguyên tố";
    }
    else{
    document.getElementById('results').innerHTML =snt + " không là số nguyên tố";
    }
}
function checksnt(){
    let snt = document.getElementById('input').value;
    if(checkinput(snt)){
      
        kiemtrasnt(snt);
    }
    else{
        alert("Vui lòng nhập giá trị 0 < n < 10000");
    }
}

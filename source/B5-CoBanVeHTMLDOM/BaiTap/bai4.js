function BMIfunctions(){

    let w = parseFloat(document.getElementById('kg').value);
    let h = parseFloat(document.getElementById('met').value);

    let bmi= w / (h ^ 2);
    if(bmi < 16){
        alert("Chỉ số BMI: "+ bmi + " => Gầy độ III");
    }
    else if(bmi >= 16 && bmi < 17){
        alert("Chỉ số BMI: "+ bmi + " => Gầy độ II");
    }
    else if(bmi >= 17 && bmi < 18.5){
        alert("Chỉ số BMI: "+ bmi + " => Gầy độ I");
    }
    else if(bmi >= 18.5 && bmi < 25){
        alert("Chỉ số BMI: "+ bmi + " => Bình thường");
    }
    else if(bmi >= 25 && bmi < 30){
        alert("Chỉ số BMI: "+ bmi + " => Thừa cân");
    }
    else if(bmi >= 30 && bmi < 35){
        alert("Chỉ số BMI: "+ bmi + " => Béo phì độ I");
    }
    else if(bmi >= 35 && bmi < 40){
        alert("Chỉ số BMI: "+ bmi + " => Báo phì độ II");
    }
    else if(bmi > 40){
        alert("Chỉ số BMI: "+ bmi + " => Béo phì độ III");
    }
    else{
        alert("Something wrong. Try again.")
    }
    
}
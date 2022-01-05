function bai1function(){
    for(let i =1; i< 100; i++){
        if(i == 99){
            alert("Đã hoàn thành.");
        }
    }
}

function bai2function(){
    do{
       var C= parseFloat( prompt("Nhiệt độ hiện tại là:"));
        if(C >100){
            alert("Vui lòng giảm nhiệt độ.");
            break;
        }
        else if(C < 20){
            alert("Vui lòng tăng nhiệt độ.");
            break;
        }
        else{
            alert(" Nhiệt độ bình thường.");
            break;
        }
    }while(C != 0);
}

function bai3function(){
    document.getElementById('kqb3').innerHTML = "Kết quả: ";
    let num1 = 20;
    let a =0, b = 1, temp;

    while (num1 >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num1--;
        console.log(b);
        document.getElementById('kqb3').innerHTML += b + " ";
        
    }
}


function bai4function(){
    document.getElementById('kqb4').innerHTML = "Số đầu tiên chia hết cho 5 là: ";
    let num1 = 20;
    let a =0, b = 1, temp;
    //document.write("Dãy fibonacci:");
    while (num1 >= 0){
        
        temp = a;
        a = a + b;
        b = temp;
        
       if(b != 0 && b % 5 == 0 ){
        document.getElementById('kqb4').innerHTML += b + " ";
        break;
       }
        num1--;
        console.log(b);
        
        
    }
}

function bai5function(){
    document.getElementById('kqb5').innerHTML = "Tổng = ";
    let num1 = 20;
    let a =0, b = 1,S =0, temp;
    
    while (num1 >= 0){
        temp = a;
        a = a + b;
        b = temp;
        S = S + b;
        num1--;
        console.log(b);
          document.getElementById('kqb5').innerHTML = S;
        
    }
}


function bai6function(){
    
   var count = 0, S = 0;
    
   

  
        for(var i = 1;  ; i++){
            if(count > 30){
                break;
            }
            if( i % 7 == 0){
                S +=  i;
                console.log(i);
                  document.getElementById('kqb6').innerHTML ="Tổng = " + S;
                  count++;
            }   
        }
    
    
}

function bai7function(){

    for(var i= 1; i <=100; i ++){
        if(i % 3 == 0){
            document.getElementById('kqb7').innerHTML +=  "Fizz - ";
        }
        else if(i % 5 == 0){
            document.getElementById('kqb7').innerHTML +=  "Buzz - ";
        }
        else if(i% 3 == 0 && i % 5 == 0){
            document.getElementById('kqb7').innerHTML +=  "FizzBuzz - ";
        }
        else{
            document.getElementById('kqb7').innerHTML += i + " -";
        }
    }
}

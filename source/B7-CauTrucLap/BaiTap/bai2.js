
   // let num = parseInt(document.getElementById('input').value);
    let num1 = parseInt(prompt("nhập một số bất kỳ"));
    let a =0, b = 1, temp;
    document.write("Dãy fibonacci:");
    while (num1 >= 0){
        
        temp = a;
        a = a + b;
        b = temp;
         
        num1--;
        console.log(b);
        document.write( b + " ");
       // alert(b);
     
      }
    

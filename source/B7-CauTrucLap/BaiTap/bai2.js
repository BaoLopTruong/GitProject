function myfunction(){

    let num = parseInt(document.getElementById('input').value);
    //let num1 = parseInt(prompt("nhập một số bất kỳ"));
    let a =0, b = 1, temp;
    document.getElementById('kqua').innerHTML = "Dãy fibonacci: ";
    while (num >= 0){
        
        temp = a;
        a = a + b;
        b = temp;
         
        num--;
        console.log(b);
        document.getElementById('kqua').innerHTML += b + " ";
       
    
     
    } 
}
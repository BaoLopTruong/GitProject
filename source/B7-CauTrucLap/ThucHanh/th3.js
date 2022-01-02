//bai1
function myfunction1(){
    let n = parseInt(document.getElementById('bai1').value);
    let text = "";
    for(let i = 0; i < n; i ++){
         text = "The number is " + i + "<br>";
         document.getElementById('kqb1').innerHTML += text;
    }
   
}
//bai2
function myfunction2(){
    let n = parseInt(document.getElementById('bai2').value);
    let total = 0;
    for(let i = 0; i <= n; i ++){
         total = total + i ;
         
    }
document.getElementById('kqb2').innerHTML = total;
}
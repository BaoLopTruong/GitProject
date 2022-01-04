 // tạo ngẫu nhiên một số tự nhiên
 function TaoSoNgauNhien(min, max){
    
    return Math.floor(Math.random() * (max - min)) + min;
}
// tạo ngẫu nhiên một số thực
function randomNumber(a, b) {
    return Math.random() * (b - a) + a;
}

 
 function myfunction(){
   
    var max= parseInt( prompt("Nhập vào một số"));
  // document.getElementById('input').style.display= "block";
   var min = 0;
   var result = TaoSoNgauNhien(min,max);
   console.log(result);
   
   
   var myask = parseInt(prompt("Bạn dự đoán sẽ là số mấy?"));
  // for(var i = 0; i<= max; i++){
       if(myask === result){
           alert("Congratulation.");
           document.getElementById('btnchoi').style.display = "none";
           document.getElementById('reloadgame').style.display = "block";
           document.getElementById('kqua').innerHTML = "Kêt quả: " + result;
         
       }else{
            alert("you wrong.");
            
            for(let agian=2; agian <=3; agian++){
                myask2 = parseInt(prompt("Try again " + agian + ":"));
                if(myask2 !== result){
                
                        alert("you wrong");
                
                    if(myask2 == 3){
                      
                        alert("Đã hết 3 lượt.");
                        document.getElementById('btnchoi').style.display = "none";
                        document.getElementById('reloadgame').style.display = "block";
                        document.getElementById('kqua').innerHTML = "Kêt quả: " + result;
                    }
                }
                else{
                    alert("Congratulation.");
                    document.getElementById('btnchoi').style.display = "none";
                    document.getElementById('reloadgame').style.display = "block";
                    document.getElementById('kqua').innerHTML = "Kêt quả: " + result;
                
                }
            }
        
       }
   //}

 }


function reloadfunction(){
    document.getElementById('btnchoi').style.display= "block";
    document.getElementById('reloadgame').style.display = "none";
}


//  function myfunction1(){
//      var input = parseInt(document.getElementById('input').value);
     

//      if(input === check){
//          alert("đúng");
//      }
//      else{
//          alert("sai");
//      }

//  }
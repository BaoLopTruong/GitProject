function Checkgia(){
 let fruit = document.getElementById('input').value;
 const a= 20000;
 const b = 30000;
 const c = 40000;
 const d = 50000;


 switch(fruit){
     case "Oi":
        document.getElementById('gia').innerHTML = a + " VND/kg";
        break;
    case "DuaHau":
        document.getElementById('gia').innerHTML = a + " VND/kg";
        break;
    case "Tao":
        document.getElementById('gia').innerHTML = b + " VND/kg";
        break;     
    case "Xoai":
        document.getElementById('gia').innerHTML = b + " VND/kg";
        break;    
    case "Cam":
        document.getElementById('gia').innerHTML = c + " VND/kg";
        break;    
    case "ChomChom":
        document.getElementById('gia').innerHTML = c + " VND/kg";
        break;    
    case "MangCut":
        document.getElementById('gia').innerHTML = d + " VND/kg";
        break;   
    default: 
        document.getElementById('gia').innerHTML= " Vui lòng ghi đúng tên hoa quả cần xem giá"; 
 }
}
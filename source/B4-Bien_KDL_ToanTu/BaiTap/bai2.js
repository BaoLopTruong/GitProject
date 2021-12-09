// Cho bánh kính R, tìm đường kính, chu vi và diện tích của hình tròn
//Cong thức tính chu vi hình tròn C= 2R * 3,14)
// Công thức tính diện tích hình tròn S =R^2 *3,14
var R = Number(prompt("Nhập bán kình hình tròn R= "));
if(isNaN(R) === true){
  var R = Number(prompt("Vui lòng nhập lại bán kình hình tròn R= "));
}
else{
    var C = 2*R*3.14;
  var S = R*R*3.14;
  
}
alert(" Đường kính hình tròn là: " + 2*R + "\n" 
      + "Chu vi hình tròn là: " + C + "\n"
      + "Diện tích hình tròn là: " + S); 
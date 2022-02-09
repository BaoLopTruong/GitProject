
let html = "";
let hcn = new Rectengle(50,60);
html+="Chiều dài: " + hcn.h + " Chiều rộng: " + hcn.r;
html+="<br>Chu vi hình chữ nhật: " + hcn.ChuVi();
html+="<br>Diện tích hình chữ nhật: " + hcn.DienTich();
html+="<br>Hiển thị trực quan hình chữ nhật: " ;
document.getElementById('show').innerHTML = html;

var canvas = document.getElementById("DemoCanvas");
if (canvas.getContext) 
{
  var ctx = canvas.getContext('2d');
  ctx.fillStyle='#fa4b2a';    // color of fill
  ctx.fillRect(10, 40, hcn.r, hcn.h); // create rectangle  
}
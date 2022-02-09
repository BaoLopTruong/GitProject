

let html="";
let circle = new Circle(2,"#000");
html+="Bán kính hình tròn: " + circle.getRadius(); 
html+="<br>Diện tích hình tròn: " + circle.getArea(); 
document.getElementById('show').innerHTML = html;
function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
 }
 // ve hinh tron voi kich thuoc co dinh
 function createCircle(){
     var ctx = document.getElementById("myCanvas").getContext("2d");
     var circle= new Circle(500, 500, 80);
     ctx.beginPath();
     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
     ctx.fill();
 }
 
 // ve hinh tron voi ban kinh ngau nhien
 function createCircle2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var circle= new Circle(500, 500, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}

// ve hinh tron voi mau ngau nhien
function createCircle3(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var circle= new Circle(500, 500, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}


//tao mau ngau nhien
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
   var red = getRandomHex();
   var green = getRandomHex();
   var blue = getRandomHex();
	 return "rgb(" + red + "," + blue + "," + green +")";
}

//ve hinh tron voi vi tri ngau nhien
function createCircle4(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

// ve 2 hinh tron
function createCircle5(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}


// tao nhieu hinh tron

function createCircle6(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createMultipleCircle(){
		for(var i = 0; i < 30; i++){
    	createCircle();
    }
}
createCircle6();
createCircle6();
let html ="";
    
let Apple1 = new Apple(10);
html+="số lượng táo ban đầu:" + Apple1.weight;
let Human1 = new Human("Bao", 'nam', 50);
html+="<br> Người đầu tiên" + Human1.name +" <br>Tuổi: "+ Human1.gender + " <br>Cân nặng: " +Human1.weight
html+= "<br>That person said: "+ Human1.say("Hello mn")

document.getElementById('show').innerHTML = html;

let eat1= Human1.eat(Apple1);
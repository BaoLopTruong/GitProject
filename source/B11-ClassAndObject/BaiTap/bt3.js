let html ="";
    
let Apple1 = new Apple(10);
html+="Số lượng táo ban đầu:" + Apple1.weight;
let Human1 = new Human("Bao", 'nam', 50);
html+="<br> Tên:" + Human1.name +" <br>Giới tính: "+ Human1.gender + " <br>Cân nặng: " + Human1.weight
html+= "<br>That person said: "+ Human1.say("Hello mn")



// Human1.eat(Apple1);
// html+="<br>Số táo còn lại: " + Apple1.weight;
// html+= "<br>Cân nặng hiện tại: " + Human1.weight;

for( let i = Apple1.weight; i > 0; i--){
    Human1.eat(Apple1);
html+="<br>Số táo còn lại: " + Apple1.weight;
html+= "<br>Cân nặng hiện tại: " + Human1.weight;

}
Human1.setName('Ngọc');
html+="<br>Cập nhật tên: " + Human1.getName();
Human1.setGender('nu');
html+="<br>Cập nhật giới tính: " + Human1.getGender();
Human1.setWeight(45);
html+="<br>Cập nhật cân nặng: " + Human1.getWeight();

document.getElementById('show').innerHTML = html;
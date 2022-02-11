let lamp = new ElectricLamp();
let button = new SwitchButton();

button.connectToLamp(lamp);




function TurnOn(){
    if(!lamp.status){

        button.switchOn();
        alert("Bật đèn");
    }
    
}
function TurnOff(){
    if(lamp.status){
        button.switchOff();
        alert("Tắt đèn")
    }
   
}
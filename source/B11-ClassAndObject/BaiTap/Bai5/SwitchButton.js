class SwitchButton{

    
    constructor(){
        this.status = false;
        this.lamp = null;
    }
    connectToLamp(ElectricLamp){
        this.lamp = ElectricLamp;
    }
    switchOff(){
        this.status = false;
        this.lamp.turnOff();
    }
    switchOn(){
        this.status = true;
        this.lamp.turnOn();
    }
}
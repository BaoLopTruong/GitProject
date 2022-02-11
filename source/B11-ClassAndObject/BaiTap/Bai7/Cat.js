class Cat{
    constructor(name, weight, speed){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }

    VoiceCat(meo){
        return meo;
    }

    CatchMouse(Mouse){
   
        return this.speed > Mouse.speed;
    }
    
    EatMouse(Mouse){
        if(Mouse.status && this.CatchMouse(Mouse)){
            alert("Mèo đã bắt đươc chuột")
            alert("Mèo đang ăn say sưa.");
            this.weight++;
            this.speed--;
            Mouse.weight--;
            if(Mouse.weight == 0){
                alert("Mouse Died");
                Mouse.status = false;
            }
        }
    }

}
class Apple{

    constructor(weight){
        this.weight = weight;
    }
    decrease(){
        return this.weight--;
    }

    isEmpty(){
        // if(this.weight > 0){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        return this.weight > 0;
    }
    getWWeight(){
        return this.weight;
    }

}
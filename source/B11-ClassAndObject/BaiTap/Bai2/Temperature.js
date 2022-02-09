class Temperature{

    constructor(doC){
        this.doC = doC;
    }
    CsangF(){
       return (this.doC *1.8) +32;
    }
    CsangK(){
        return this.doC + 273.15;
    }
}
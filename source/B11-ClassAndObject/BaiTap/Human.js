class Human{

    constructor(name, gender, weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale(){
        // if(this.gender== "nam"){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        return this.gender== "nam";
    }

    setGender(newGender){
        this.gender = newGender;
    }

    checkApple(Apple){
        // if(Apple.isEmpty() ){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        return Apple.isEmpty(); 

    }

    eat(Apple){
        if(this.checkApple(Apple)){
            Apple.decrease();
            this.weight++;
        }
        else{
            alert("Hết táo rồi");
        }        

    }

    say(String){
          return String;
    }

    getName(){
        return this.name;
    }
    setName(newName){
        this.name = newName;
    }

    getWeight(){
        return this.weight;
    }

    setWeight(newWeight){
        this.weight = newWeight;
    }

}
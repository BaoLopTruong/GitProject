class Circle{

    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }
    
    getArea(){
      
        return   this.radius *  this.radius * 3.14;
    }

}
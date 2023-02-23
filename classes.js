class Shape{
    constructor(colour){
        this.colour=colour||'Transparent';
        this.type='Shape';
    }
}

Shape.prototype.describe=function(){
    console.log('A '+this.colour+' '+this.type);
}

class Square extends Shape{
    constructor(colour,sideLength){
        super(colour);
        this.sideLength=sideLength;
        this.type='Square';
    }
}

Square.prototype.area=function(){
    return (this.sideLength*this.sideLength);
}

class Rectangle extends Square{
    constructor(colour,width,height){
        super(colour);
        this.width=width;
        this.height=height;
        this.type='Rectangle';
    }
}

Rectangle.prototype.area=function(){
    return (this.width*this.height);
}
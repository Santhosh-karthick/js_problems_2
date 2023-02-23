const square = new Square("blue", 5);  //this creates a new square object with colour = blue and  side length =5
const rectangle = new Rectangle("red", 5, 6); //this creates a new rectangle object with colour = red, width =5 and height=6
console.log( square.area() ); // 25 ---> This is the area of the created square
console.log( rectangle.area() ); // 30 ---> This is the area of the created rectangle
for ( const shape of [square, rectangle] ) shape.describe(); //this foreach loops thru existing rectangle and square objects and prints their description
// A blue square
// A red rectangle
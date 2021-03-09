var isDone = false;
console.log(isDone);
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
var aname = "Gene";
var age = 37;
var sentence = "Hello, my name is " + aname + ". I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//------数组----------
var list = [1, 2, 3];
var list1 = [1, 2, 3];
console.info(list);
//------元组----------
// Declare a tuple type
var x;
// Initialize it
x = ['hello', 10]; // OK
//----枚举-------------
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);

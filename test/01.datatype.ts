let isDone:boolean = false
console.log(isDone)

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);

let aname: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ aname }. I'll be ${ age + 1 } years old next month.`;

console.log(sentence)

//------数组----------
let list: number[] = [1, 2, 3];

let list1: Array<number> = [1, 2, 3];
console.info(list);

//------元组----------
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK

//----枚举-------------
enum Color {Red=1, Green, Blue}
let c: Color = Color.Green;
console.log(c)
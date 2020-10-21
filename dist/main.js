"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    var decLiteral = 6;
    elt.innerText = greet_1.sayHello(name + " " + decLiteral + "aha");
}
showHello("greeting", "TypeScript");

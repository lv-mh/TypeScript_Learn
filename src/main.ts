import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    let elt = document.getElementById(divName);
    let decLiteral: number = 6;
    elt.innerText = sayHello(name+" "+decLiteral+"aha");

}

showHello("greeting", "TypeScript");
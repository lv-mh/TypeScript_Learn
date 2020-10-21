import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    let decLiteral: number = 6;
    elt.innerText = sayHello(name+" "+decLiteral);

}

showHello("greeting", "TypeScript");
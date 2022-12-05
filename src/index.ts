import component, { a } from './components/a';
import b from './components/b';
import hello from './components/hello';
import "./main.scss";
import "./style.css";


console.log(b)
console.log(hello)
console.log(a)

document.body.appendChild(component());

(document.querySelector(".test") as HTMLButtonElement).addEventListener("click" ,(e) => {
  console.log("Clicked" , e.button , e.buttons)
})

console.log(1352232 % 2)
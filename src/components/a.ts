import _ from 'lodash';
import printMe from "../print";
console.log("hello")

const a = {
  name: "Ikram123",
  surname: "Zulfugar13"
}

function component() {
    const element = document.createElement("div");
    const button = document.createElement("button");
  
    element.innerHTML = _.join(["Hello", "webpack"], " ");
  
    button.innerHTML = "Click me and then check the console !";
    button.onclick = printMe.bind(null, "Hello Webpack");
  
    element.appendChild(button);
  
    return element;
  }

export { a };
export default component
import _ from "lodash";
import './style.css';
import man from './images/b-mv__man.jpg';

function component(){
  const element = document.createElement("div");
  const array = ["Hello","webpack","!!!"]
  element.innerHTML = _.join(array," ");
  return element;
}

document.body.appendChild(component());
// document.body.classList.add('haikei');

const image = new Image();
image.src = man;
document.body.appendChild(image);
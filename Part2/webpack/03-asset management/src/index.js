import _ from "lodash";
import "./style.css";
import img from "./webpack.jpg";
import printMe from "./print.js";
function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  //lodash,now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("red");

  var oImg = new Image();
  oImg.src = img;
  element.appendChild(oImg);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

import printMe from "./print.js";
import './style.css';
function component() {
  let ele = document.createElement("div");
  let btn = document.createElement("button");
  ele.innerHTML = ["hello", "webpack"].join(" ");
  btn.innerHTML = "click me";
  btn.onclick = printMe;
  ele.appendChild(btn);
  return ele;
}
// document.body.appendChild(component());
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    // printMe();
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  });
}

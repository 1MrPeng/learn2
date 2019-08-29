import {cube} from './math.js';
import "./style.css";
function component() {
    var element = document.createElement('div');
    
    element.innerHTML =[
      'hello',
      '5 cube =' + cube(5)
    ].join('\n');
    element.classList.add('red');
    element.onclick = function(){
      element.classList.add('blue');
    }
    return element;
  }
  
  document.body.appendChild(component());
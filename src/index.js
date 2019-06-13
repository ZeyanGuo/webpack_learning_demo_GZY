//import _ from "lodash";
//import '../asset/css/style.css';
//import Icon from '../asset/img/ear-phone.svg';
//import Data from '../asset/data/data.xml';
//import {cube} from './math.js';
//function component(){
//	var element = document.createElement('div');
//	element.innerHTML = _.join(['Hello','webpack'],' ');
//	element.classList.add('hello');
//	var myIcon = new Image();
//	myIcon.src = Icon;
//	element.appendChild(myIcon);
//	console.log(Data);
//
//	var PreElement = document.createElement('pre');
//	PreElement.innerHTML = [
//		'Hello webpack!',
//		'5 cubed is equal to ' + cube(5)
//	].join('\n\n');
//
//	element.appendChild(PreElement);
//	
//	var button = document.createElement('button');
//	var br = document.createElement('br');
//
//	button.innerHTML = 'Click me and look at the console!';
//
//	element.appendChild(br);
//	element.appendChild(button);
//
//	button.onclick = e => import('./print').then(module => {
//		var print = module.default;
//		printMe();
//	})
//
//	return element;
//}
//document.body.appendChild(component());

import * as webpackNumbers from './Components/Demo01';

let span = document.createElement('span');
span.innerHTML = webpackNumbers.wordToNum('Two');
document.body.appendChild(span);

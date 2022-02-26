let myInput = document.createElement('input');
myInput.setAttribute('type', 'number');
myInput.className = 'number-one';

let myButton = document.createElement('button');
myButton.innerText = 'Показать';
myButton.className = 'button';

let result = document.createElement('p');
result.innerText = 'Hi';
result.className = 'result';

let wrapper = document.createElement('div');
wrapper.className = 'wrapper';


let body = document.querySelector('body');

body.appendChild(wrapper);
body.appendChild(myInput);
body.appendChild(myButton);
body.appendChild(result);
wrapper.appendChild(myInput);
wrapper.appendChild(myButton);
wrapper.appendChild(result);

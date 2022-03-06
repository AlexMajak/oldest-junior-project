let myInput = document.createElement("input");
myInput.setAttribute("type", "number");
myInput.className = "number-one";

let myButton = document.createElement("button");
myButton.innerText = "Показать";
myButton.className = "button";

let text = document.createElement("p");
text.innerText = "Hi, price tickets equals 100 rubles";
text.className = "text";

let result = document.createElement("p");
result.innerText = "";
result.className = "result";

let wrapper = document.createElement("div");
wrapper.className = "wrapper";

let body = document.querySelector("body");

body.appendChild(wrapper);
body.appendChild(myInput);
body.appendChild(myButton);
body.appendChild(result);
body.appendChild(text);

wrapper.appendChild(myInput);
wrapper.appendChild(myButton);
wrapper.appendChild(text);
wrapper.appendChild(result);

myButton.addEventListener("click", function () {
  let price = 100;
  let age = myInput.value;

  if (age <= 8) {
    price = 0;
  } else if (age < 20) {
    price = price * 0.8;
  } else {
    price = price;
  }
  result.innerText = `Цена билета равна ${price} рублей`;
});

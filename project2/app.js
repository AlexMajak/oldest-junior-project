const numberOne = document.querySelector(".number-one");
const button = document.querySelector(".button");
const result = document.querySelector(".result");

button.addEventListener("click", function () {
  let price = 100;
  let age = numberOne.value;

  //Если младьше 8 цена 0
  if (age < 8) {
    price = 0;
    //если младьше 20 лет цена -20 процентов
  } else if (age < 20) {
    price = price * 0.8;
  } else {
    price = price;
  }

  result.innerText = `Цена билета равна ${price}`;
});

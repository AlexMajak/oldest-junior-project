let myButton = document.querySelector(".my-button");
let myInput = document.querySelector(".my-input");
let myHeader = document.querySelector(".header");

myButton.addEventListener("click", function () {
  let amount = parseInt(myInput.value);
  let VAT = 0.15;
  myHeader.innerText = `Сумма НДС со ${amount} рублей равна ${
    amount * VAT
  } рублей`;
});

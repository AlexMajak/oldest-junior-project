const numberOne = document.querySelector(".number-one");
const numberTwo = document.querySelector(".number-two");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const result = document.querySelector('.result');
const clearButton = document.querySelector('.clear')

clearButton.addEventListener('click', function () {
	result.textContent = '';
	numberOne.value = '';
	numberTwo.value = '';
})

plusButton.addEventListener('click', function () {
	let sum = Number(numberOne.value) + Number(numberTwo.value);
	result.textContent = `Сумма чисел равна: ${sum}`;
})

minusButton.addEventListener('click', function () {
	let minus = Number(numberOne.value) - Number(numberTwo.value);
	result.textContent = `Разность чисел равна: ${minus}`;
})

divideButton.addEventListener('click', function () {
	let divide = Number(numberOne.value) / Number(numberTwo.value);
	result.textContent = `Частное чисел равно: ${divide}`;
}
)
multiplyButton.addEventListener('click', function () {
	let multiply = Number(numberOne.value) * Number(numberTwo.value);
	result.textContent = `Произведение чисел равно: ${multiply}`;
})
const someInput = document.querySelector(".input_one");
let randomNumber = Math.floor(Math.random() * 10001).toFixed(0);
const randomNumberTwo = (document.querySelector(".numberTwo").value =
  randomNumber);
const sendButton = document.querySelector(".button");
const comparisonError = document.querySelector(".error");
const reverseRandomNumber = document.querySelector(".reverseNumb");

function reverseANumber(n) {
  //input always returns a string
  return +n.split("").reverse().join("");
}

sendButton.addEventListener("click", () => {
  //console.log(reverseANumber.value);
  if (reverseRandomNumber.value == reverseANumber(randomNumber)) {
    comparisonError.style.color = "green";
    comparisonError.textContent = "Успешно";
  } else {
    comparisonError.style.color = "red";
    comparisonError.textContent = "Ошибка";
    return true;
  }
});

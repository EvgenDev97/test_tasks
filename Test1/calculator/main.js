const A = document.querySelector(".input__one");
const B = document.querySelector(".input__two");
var result = document.querySelector(".input__result");
const division = document.querySelector(".division");
const multiplication = document.querySelector(".multiplication");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const rest = document.querySelector(".rest");
const exponentiation = document.getElementById("exponentiation");

division.addEventListener("click", () => {
  const resultDivison = A.value / B.value;
  result = result.value = resultDivison;
});

multiplication.addEventListener("click", () => {
  const resultDivison = A.value * B.value;
  result = result.value = resultDivison;
});

plus.addEventListener("click", () => {
  const resultDivison = A.value + B.value;
  result = result.value = resultDivison;
});

minus.addEventListener("click", () => {
  const resultDivison = A.value - B.value;
  result = result.value = resultDivison;
});

rest.addEventListener("click", () => {
  const resultDivison = A.value % B.value;
  result = result.value = resultDivison;
});

exponentiation.addEventListener("click", () => {
  const resultDivison = A.value ** B.value;
  result = result.value = resultDivison;
});

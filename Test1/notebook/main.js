const form = document.querySelector(".form");
const ls = localStorage;
const btn = document.querySelector(".button");

// получить данные из input
btn.addEventListener("click", () => {
  ls.setItem("form", form.elements.task.value);
});

window.onload = function (event) {
  const task = ls.getItem("form");
  form.elements.task.value = task;
};

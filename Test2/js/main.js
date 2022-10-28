const form = document.querySelector(".form");
const email = form.querySelector(".email__name");
const password = form.querySelector(".password__name");
const loginBtn = document.querySelector(".Login__btn");
const emailError = form.querySelector(".email__name ~ .error"); //~ соседние элементы на одном уровне вложенности
const passwordError = form.querySelector(".password__name ~ .error");
const checkInput = document.querySelector(".remember");

const ls = localStorage;

document.addEventListener("DOMContentLoaded", () => {
  loginBtn.addEventListener("click", () => {
    validateEmail(email.value);
    validatePassword(password.value);
    saveData();
    modalWindow();
  });
});

//modal__window
const modal = document.querySelector(".modal__window");
const modalContent = document.querySelector(".modal__content");
const modalClose = document.querySelector(".close");
console.log(modal);
function modalWindow() {
  if (validateEmail(email.value) && validatePassword(password.value)) {
    modal.style.display = "block";
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

//localstorage

function saveData() {
  const user = { userEmail: email.value, userPassword: password.value };
  if (checkInput.checked) {
    ls.setItem("user", JSON.stringify(user));
  }
}
window.onload = function () {
  user = JSON.parse(ls.getItem("user"));
  email.value = user.userEmail; // assign input's value
  password.value = user.userPassword;
};
saveData();

//validation
function validateEmail(email) {
  if (isEmpty(email)) {
    emailError.style.display = "block";
    emailError.textContent = "you have empty email";
    return false;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    emailError.style.display = "none";
    return true;
  }
  emailError.style.display = "block";
  emailError.textContent = "You have entered an invalid email address!";
  return false;
}

function validatePassword(password) {
  if (isEmpty(password)) {
    passwordError.style.display = "block";
    passwordError.textContent = "you have empty password";
    return false;
  }
  if (password.length > 6) {
    passwordError.style.display = "none";
    return true;
  }
  passwordError.style.display = "block";
  passwordError.textContent = "password must have at least 7 characters";

  return false;
}

function isEmpty(str) {
  return !str;
}

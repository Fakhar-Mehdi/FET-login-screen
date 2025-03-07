const inputCode = document.querySelector(".input-code");
const loginButton = document.querySelector(".login-button");

inputCode.addEventListener("input", () => {
  if (inputCode.value.length === 8) {
    loginButton.classList.add("active");
  } else {
    loginButton.classList.remove("active");
  }
});

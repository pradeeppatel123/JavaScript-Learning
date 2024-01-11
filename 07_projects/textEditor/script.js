document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("input-field");
  const upperCase = document.querySelector(".uppercase");
  const lowerCase = document.querySelector(".lowercase");
  const capitalize = document.querySelector(".capitalize");
  const bold = document.querySelector(".bold");
  const italic = document.querySelector(".italic");
  const underline = document.querySelector(".underline");
  const outputField = document.querySelector("#output-field");

  upperCase.addEventListener("click", function () {
    outputField.textContent = inputField.value.toUpperCase();
  });
  lowerCase.addEventListener("click", function () {
    outputField.textContent = inputField.value.toLowerCase();
  });

  capitalize.addEventListener("click", function () {
    outputField.textContent = capitalizeInputValue(inputField.value);
  });

  bold.addEventListener("click", function () {
    outputField.innerHTML = `<strong>${inputField.value}</strong>`;
  });

  italic.addEventListener("click", function () {
    outputField.innerHTML = `<em>${inputField.value}</em>`;
  });

  underline.addEventListener("click", function () {
    outputField.innerHTML = `<u>${inputField.value}</u>`;
  });

  function capitalizeInputValue(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }
});

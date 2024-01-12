document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("input-field");
  const outputField = document.getElementById("output-field");
  const upperCase = document.querySelector(".uppercase");
  const lowerCase = document.querySelector(".lowercase");
  const capitalize = document.querySelector(".capitalize");
  const bold = document.querySelector(".bold");
  const italic = document.querySelector(".italic");
  const underLine = document.querySelector(".underline");

  upperCase.addEventListener("click", function () {
    outputField.textContent = inputField.value.toUpperCase();
  });

  lowerCase.addEventListener("click", function () {
    outputField.textContent = inputField.value.toLowerCase();
  });

  capitalize.addEventListener("click", function () {
    outputField.textContent = capitalizeWord(inputField.value);
  });

  bold.addEventListener("click", function () {
    outputField.innerHTML = `<strong>${inputField.value}</strong>`;
  });

  italic.addEventListener("click", function () {
    outputField.innerHTML = `<em>${inputField.value}</em>`;
  });
  underLine.addEventListener("click", function () {
    outputField.innerHTML = `<u>${inputField.value}</u>`;
  });

  function capitalizeWord(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }
});

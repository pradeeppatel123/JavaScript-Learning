document.addEventListener("DOMContentLoaded", function () {
  const bookForm = document.getElementById("book-form");
  const bookList = document.getElementById("book-list");

  bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const titleInput = document.getElementById("title");
    const autherInput = document.getElementById("author");

    const yearInput = document.getElementById("year");

    const title = titleInput.value;
    const author = autherInput.value;
    const year = yearInput.value;

    if (title && author && year) {
      addBookToTable(title, author, year);
      clearFormInputs();
    } else {
      alert("Please fill in all the fields");
    }
  });

  function addBookToTable(title, author, year) {
    const newRow = document.createElement("div");
    newRow.classList.add("table-section");

    const titleCell = document.createElement("div");
    titleCell.textContent = title;
    newRow.appendChild(titleCell);

    const authorCell = document.createElement("div");
    authorCell.textContent = author;
    newRow.appendChild(authorCell);

    const yearCell = document.createElement("div");
    yearCell.textContent = year;
    newRow.appendChild(yearCell);

    bookList.appendChild(newRow);
  }

  function clearFormInputs() {
    const formnputs = document.querySelectorAll("#book-form input");
    formnputs.forEach((input) => (input.value = ""));
  }
});

const lang = document.documentElement.lang;

let opt = null;

switch (lang) {
  case "ja":
    opt = document.querySelector('option[value="index.html"]');
    break;
  case "en":
    opt = document.querySelector('option[value="index-en.html"]');
    break;
  case "zh":
    opt = document.querySelector('option[value="index-zh.html"]');
    break;
}

if (opt) {
  opt.selected = true;
}

const langForm = document.getElementById("lang-form");
if (langForm && langForm.select) {
  langForm.select.onchange = function () {
    location.href = langForm.select.value;
  };
}

const textBox = document.getElementById("textBox");
const addButton = document.getElementById("event-add-button");
const deleteButton = document.getElementById("event-delete-button");
const listElement = document.getElementById("list");

if (addButton && textBox && listElement) {
  addButton.addEventListener("click", () => {
    const value = textBox.value.trim();
    if (!value) return;

    const li = document.createElement("li");
    li.textContent = value;
    listElement.appendChild(li);
    textBox.value = "";
  });
}

if (deleteButton && listElement) {
  deleteButton.addEventListener("click", () => {
    if (listElement.lastChild) {
      listElement.removeChild(listElement.lastChild);
    } else {
      alert("削除する項目はありません");
    }
  });
}

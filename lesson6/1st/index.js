// const date = new Date();
// const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

// const timeSector = document.querySelector("h3 span");
// timeSector.innerHTML = time;
// const userInput = prompt("Enter text", "Sample Text");
// const outputText = document.querySelector("h1");
// outputText.innerHTML = `${outputText.innerText} ${userInput}`;

let box = document.querySelector(`.box`);
const number = Math.round(Math.random() * 10 + 5);

const elements = 7;
const rows = Math.ceil(elements / 3);
const numberOfelements = rows * 3;
const emptyElements = numberOfelements - elements;

console.log(emptyElements);

for (i = 0; i < elements; i++) {
  box.innerHTML = box.innerHTML + `<span class="element"></span>`;
}
for (i = 0; i < emptyElements; i++) {
  box.innerHTML = box.innerHTML + `<span class="empty"></span>`;
}

// email, пол, любимый цвет, дата рождения

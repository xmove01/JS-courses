const outputScreen = document.querySelector('[type="text"]');
const inputText = document.querySelector("textarea");
const btn = document.querySelector("button");
const output = document.querySelector(".output");
let collection = [];
outputScreen.value = collection.length;
btn.disabled = true;


btn.addEventListener("click", (e) => {
  e.preventDefault();
  collection.push({
    id: collection.length + 1,
    text: inputText.value,
  });
  inputText.value = "";
  btn.disabled = true;
  outputScreen.value = collection.length;
  draw();
  scroll();
  quer();
});

inputText.addEventListener("input", () => {
  btn.disabled = inputText.value === "";
});

function draw() {
  output.innerHTML = "";
  //   for (let i = 0; i < collection.length; i++) {
  //     output.innerHTML += `<li>id: ${collection[i].id}<br>text: ${collection[i].text}</li>`;
  //   }
  collection.forEach((e) => {
    output.innerHTML += `<li>id: ${e.id}<br>text: ${e.text}<br>date: ${new Date()}</li>`;
  });
}

function scroll() {
  window.scrollTo(0, 9999999999);
}

function quer() {
  document.title = `Tasks ${collection.length}`;
}

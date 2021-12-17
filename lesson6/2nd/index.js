let btn = document.querySelector("button");

let outputEmail = document.querySelector(".email");
let outputColor = document.querySelector(".color");
let outputBirth = document.querySelector(".birth");

btn.addEventListener("click", (anyEvent) => {
  anyEvent.preventDefault();
  console.log(anyEvent);
});

let inputEmail = document.querySelector('[type="email"]');

inputEmail.addEventListener("input", (anyEvent) => {
  outputEmail.innerHTML = anyEvent.target.value;
  console.log("input", anyEvent.target.value);
});

let inputDate = document.querySelector('[type="date"]');

inputDate.addEventListener("input", (anyEvent) => {
  outputBirth.innerHTML = anyEvent.target.value;
  console.log("date input", anyEvent.target.value);
});

let inputColor = document.querySelector('[type="color"]');

inputColor.addEventListener("input", (anyEvent) => {
  outputColor.innerHTML = anyEvent.target.value;
  console.log("color input", anyEvent.target.value);
});

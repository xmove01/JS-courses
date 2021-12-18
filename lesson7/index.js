const r = document.querySelector("[data-red] ~ input");
const rRing = document.querySelector("[data-red] ");

const y = document.querySelector("[data-yellow] ~ input");
const yRing = document.querySelector("[data-yellow] ");

const g = document.querySelector("[data-green] ~ input");
const gRing = document.querySelector("[data-green] ");

const RED_K = 0.4;
const YELLOW_K = 0.4;
const GREEN_K = 0.4;
let len = 10;

let lenRed = len * RED_K;
let lenYellow = len * YELLOW_K;
let lenGreen = len * GREEN_K;

function addAnimation(coefficient, valid) {
  console.log(coefficient, valid);
  len = valid / coefficient;

  lenRed = len * RED_K;
  lenYellow = len * YELLOW_K;
  lenGreen = len * GREEN_K;

  r.value = lenRed;
  y.value = lenYellow;
  g.value = lenGreen;

  rRing.style.animation = `_red ${len}s step-end infinite`;
  yRing.style.animation = `_yellow ${len}s step-end infinite`;
  gRing.style.animation = `_green ${len}s step-end infinite`;
}

function validationInputValue(inputValue) {
  const val = +inputValue.target.value.replace(/[^\d]/g, "");
  //   inputValue.target.value = val;
  return val;
}

addAnimation(1, 10);

r.addEventListener("input", (event) => {
  addAnimation(RED_K, validationInputValue(event));
});

y.addEventListener("input", (event) => {
  addAnimation(YELLOW_K, validationInputValue(event));
});

g.addEventListener("input", (event) => {
  addAnimation(GREEN_K, validationInputValue(event));
});

document.querySelector('[type="checkbox"]').addEventListener("click", (e) => {
  isHidden = e.target.checked;
  document.querySelectorAll("[type='number']").forEach((e) => {
    e.style.display = isHidden ? "none" : "block";
  });
});

document.querySelector("select").addEventListener("change", (e) => {
  if (e.target.value === "off") {
    document.querySelectorAll(".ring").forEach((e) => {
      e.style.animation = "";
    });
  } else {
    addAnimation(1, 10);
  }
});

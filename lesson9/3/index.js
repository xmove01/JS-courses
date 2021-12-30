const btn = document.querySelector("button");
const input = document.querySelector("input");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  setTimeout(() => {
    img.style.animation = "buzzer 2s 5s linear";
  }, input.value * 1000);
  //   clearTimeout(timeout);
});

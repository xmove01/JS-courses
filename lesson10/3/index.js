const box = document.querySelector("section div:last-child");

for (let i = 0; i < 100; i++) {
  document.querySelector(`section [data-div${i}]`).innerHTML += `<div data-div${i + 1} style ="width:${window.innerWidth - i}px;height:${
    window.innerHeight - i
  }px"></div>`;
}

document.querySelectorAll("div").forEach((d) => {
  d.addEventListener("mousemove", (e) => {
    e.stopPropagation();
    d.style.background = "red";
    setTimeout(() => {
      d.style.background = "white";
    }, 500);
  });
});

let n = 1;
document.querySelector("div").addEventListener("click", changeSize(1));

window.addEventListener("click", changeSize(-1));

function changeSize(j) {
  return function (e) {
    e.stopPropagation();
    n = n + j;
    document.querySelector("div").style.transform = `scale(${n})`;
  };
}

document.querySelector("div").addEventListener("dblclick", () => {
  n += 1;
  setTimeout(() => {
    document.querySelector("div").style.transform = `scale(${n})`;
  }, 3 * 1000);
});

document.querySelectorAll("div").forEach((d) => {
  d.addEventListener("click", (e) => {
    e.stopPropagation();
    d.style.background = "red";
    setTimeout(() => {
      d.style.background = "white";
    }, 1000 * 2);
  });
});

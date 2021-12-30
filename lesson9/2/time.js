const timeBox = document.querySelector(".time");
timeBox.innerText = new Date().toLocaleString();
setInterval(() => {
  timeBox.innerText = new Date().toLocaleString();
}, 1000);

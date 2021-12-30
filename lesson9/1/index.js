const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");

number.value = 0;

function changeNumber(j) {
  return function () {
    // Корирование
    let temp = parseInt(number.value.replace("+", "")) + j;
    if (temp > 0) {
      number.value = `+${temp}`;
    } else {
      number.value = temp;
    }
  };
}

plus.addEventListener("click", changeNumber(1));
minus.addEventListener("click", changeNumber(-1));

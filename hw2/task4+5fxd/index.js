let numberOfDays = 42; // Количество дней в календаре
const months = ["January", "February", "March", "April", "May", "June", "Jule", "August", "September", "October", "November", "December"]; // Перечисление месяцев
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // Перечисление дней недели

// Код который перезаписывает календарь при установке даты пользователем
//
let inputDate = document.querySelector('.dateForm input[type="date"]');

inputDate.addEventListener("input", (anyEvent) => {
  console.log("input", anyEvent.target.value);
  let currentDate = new Date(anyEvent.target.value); // Текущая дата
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let day = currentDate.getDay();
  let date = currentDate.getDate();

  let firstDateOfMonth = new Date(year, month, 1); // Первый день текущего месяца
  let lastDateOfMonth = new Date(year, month + 1, 0); // Последний день текущего месяца
  let datesInCurrentMonth = lastDateOfMonth.getDate(); // Количество дней в этом месяце
  let datesInPrevMonth = firstDateOfMonth.getDay(); // Количество дней предыдущего месяца которые отображаются в календаре текущего месяца
  let datesInNextMonth = numberOfDays - datesInCurrentMonth - datesInPrevMonth; // Количество дней следующего месяца которые отображаются в календаре текущего месяца
  let lastDateOfPrevMonth = new Date(year, month, 0).getDate() - datesInPrevMonth + 1; // Первая дата предыдущего месяца которая будет записыватся в календарь

  let outputMonth = document.querySelector(".month");
  let outputDays = document.querySelector(".days");
  let outputDates = document.querySelector(".dates");

  // Обнуляем наполнение календаря
  outputMonth.innerHTML = "";
  outputDays.innerHTML = "";
  outputDates.innerHTML = "";

  // Тут выводим месяц и год
  outputMonth.innerHTML = `${months[month]} ${year}`;

  // Тут рисуем полоску с днями недели
  for (let i = 0; i < 7; i++) {
    if (i === day) {
      // Проверка на сегодняшний день
      outputDays.innerHTML = outputDays.innerHTML + `<div class="day today">${days[i]}</div>`;
    } else {
      outputDays.innerHTML = outputDays.innerHTML + `<div class="day">${days[i]}</div>`;
    }
  }

  // Тут рисуем календарные даты
  //
  // Даты предыдущего месяца
  for (let i = 0; i < datesInPrevMonth; i++) {
    const k = lastDateOfPrevMonth + i;
    outputDates.innerHTML = outputDates.innerHTML + `<div class="date otherMonth">${k}</div>`;
  }
  // Даты текущего месяца
  for (let i = 0; i < datesInCurrentMonth; i++) {
    const j = i + 1;
    if (j === date) {
      // Проверка на сегодняшний день
      outputDates.innerHTML = outputDates.innerHTML + `<div class="date today">${j}</div>`;
    } else {
      outputDates.innerHTML = outputDates.innerHTML + `<div class="date">${j}</div>`;
    }
  }
  // Даты следующего месяца
  for (let i = 0; i < datesInNextMonth; i++) {
    const j = i + 1;
    outputDates.innerHTML = outputDates.innerHTML + `<div class="date otherMonth">${j}</div>`;
  }
  //   currentDate = new Date(anyEvent.target.value);
  //   month = currentDate.getMonth();
  //   year = currentDate.getFullYear();
  //   day = currentDate.getDay();
  //   date = currentDate.getDate();

  //   firstDateOfMonth = new Date(year, month, 1); // Первый день текущего месяца
  //   lastDateOfMonth = new Date(year, month + 1, 0); // Последний день текущего месяца
  //   datesInCurrentMonth = lastDateOfMonth.getDate(); // Количество дней в этом месяце
  //   datesInPrevMonth = firstDateOfMonth.getDay(); // Количество дней предыдущего месяца которые отображаются в календаре текущего месяца
  //   datesInNextMonth = numberOfDays - datesInCurrentMonth - datesInPrevMonth; // Количество дней следующего месяца которые отображаются в календаре текущего месяца

  //   lastDateOfPrevMonth = new Date(year, month, 0).getDate() - datesInPrevMonth + 1; // Первая дата предыдущего месяца которая будет записыватся в календарь

  //   // Обнуляем наполнение календаря
  //   outputMonth.innerHTML = "";
  //   outputDays.innerHTML = "";
  //   outputDates.innerHTML = "";

  //   // Тут выводим месяц и год
  //   outputMonth.innerHTML = `${months[month]} ${year}`;

  //   // Тут рисуем полоску с днями недели
  //   for (let i = 0; i < 7; i++) {
  //     if (i === day) {
  //       // Проверка на сегодняшний день
  //       outputDays.innerHTML = outputDays.innerHTML + `<div class="day today">${days[i]}</div>`;
  //     } else {
  //       outputDays.innerHTML = outputDays.innerHTML + `<div class="day">${days[i]}</div>`;
  //     }
  //   }

  //   // Тут рисуем календарные даты
  //   //
  //   // Даты предыдущего месяца
  //   for (let i = 0; i < datesInPrevMonth; i++) {
  //     const k = lastDateOfPrevMonth + i;
  //     outputDates.innerHTML = outputDates.innerHTML + `<div class="date otherMonth">${k}</div>`;
  //   }
  //   // Даты текущего месяца
  //   for (let i = 0; i < datesInCurrentMonth; i++) {
  //     const j = i + 1;
  //     if (j === date) {
  //       // Проверка на сегодняшний день
  //       outputDates.innerHTML = outputDates.innerHTML + `<div class="date today">${j}</div>`;
  //     } else {
  //       outputDates.innerHTML = outputDates.innerHTML + `<div class="date">${j}</div>`;
  //     }
  //   }
  //   // Даты следующего месяца
  //   for (let i = 0; i < datesInNextMonth; i++) {
  //     const j = i + 1;
  //     outputDates.innerHTML = outputDates.innerHTML + `<div class="date otherMonth">${j}</div>`;
  //   }
});

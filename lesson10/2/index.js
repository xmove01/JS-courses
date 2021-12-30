const data = localStorage.getItem("local") ? JSON.parse(localStorage.getItem("local")) : [];

const inputId = document.querySelector('[type="text"]');
const textareaUserText = document.querySelector("textarea");
const buttonSave = document.querySelector("button");
const taskListUl = document.querySelector("ul");

taskListUl.addEventListener("click", (e) => {
  const li = e.target;
  const id = li.getAttribute("data-id");
  const index = data.findIndex((element) => {
    return element.id === id;
  });
  if (id) {
    data.splice(index, 1);
    draw(data);
    saveLocal();
  }
});

textareaUserText.addEventListener("input", (e) => {
  document.querySelector("button").disabled = !e.target.value;
});

textareaUserText.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && textareaUserText.value != "") {
    addNewTask(e);
  }
});

document.querySelector("button").addEventListener("click", addNewTask);

draw(data);

function addNewTask(e) {
  e.preventDefault();

  data.push({
    id: getId(),
    text: textareaUserText.value,
    date: new Date().toLocaleString(),
  });
  saveLocal();
  clearUi();
  draw(data);
  goToBottom();
}

function draw(data) {
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `<li data-id = "${data[i].id}">
    ${data[i].id}
    <br>
    ${data[i].text}
    <hr>
    ${data[i].date}
    <button>DELETE</button>
    <input type='checkbox'>
    </li>`;
  }
  document.querySelector("ul").innerHTML = html;
}

document.querySelectorAll("li").forEach((e) => {
  e.querySelector(`[type="checkbox"]`).addEventListener("change", (c) => {
    c.target.checked ? ((e.style.background = "green"), (e.style.color = "white")) : ((e.style.background = "white"), (e.style.color = "black"));
  });
});

function goToBottom() {
  window.scrollTo(0, Number.MAX_SAFE_INTEGER);
}

function clearUi() {
  inputId.value = getId();
  textareaUserText.value = "";
  buttonSave.disabled = true;
}

function getId() {
  return Date.now().toString(36);
}

clearUi();

function saveLocal() {
  localStorage.setItem("local", JSON.stringify(data));
}

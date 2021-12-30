const data = [];

const inputId = document.querySelector('[type="text"]');
const textareaUserText = document.querySelector("textarea");
const buttonSave = document.querySelector("button");

textareaUserText.addEventListener("input", (e) => {
  document.querySelector("button").disabled = !e.target.value;
});

textareaUserText.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        addNewTask(e);
    }
});

document.querySelector("button").addEventListener("click", addNewTask);

function addNewTask(e) {
    e.preventDefault();
    
    data.push({
        id: getId(),
        text: textareaUserText.value,
    });
    
    clearUi();
    draw(data);
}

function draw(data) {
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `<li>${data[i].id}<br>${data[i].text}</li>`;
  }
  document.querySelector("ul").innerHTML = html;

  goToBottom();
}

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
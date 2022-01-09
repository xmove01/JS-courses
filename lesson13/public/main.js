window.addEventListener("close", (e) => {
  return alert("зашто?");
});

let ID = localStorage.getItem("id") || "";

if (ID) {
  onConnect();
} else {
  fetch("http://localhost:3000/id")
    .then((response) => response.json())
    .then((result) => {
      ID = result.id;
      localStorage.setItem("id", ID);
      onConnect();
    })
    .catch((error) => console.log("error", error));
}

function onConnect() {
  fetch(`http://localhost:3000/connect?id=${ID}`)
    .then((response) => response.text())
    .then((result) => {})
    .catch((error) => console.log("error", error))
    .finally(() => {
      onConnect();
    });
}

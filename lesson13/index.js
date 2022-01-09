const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// app.get("/ping", function (req, res) {
//   res.status(403);
//   res.send(parseInt(req.query["age"]) >= 18 ? "molodec" : "ne molodec");
// });

// app.post("/pong", function (req, res) {
//   console.log(req.body);
//   res.send("pong");
// });

let users = [];

app.get("/id", (_, res) => {
  res.json({
    id: `id-${Math.random().toString(36)}-${Math.random().toString(36)}-${Math.random().toString(36)}-${Date.now().toString(36)}`.replace(/0\./g, ""),
  });
});

app.get("/connect", (req, res) => {
  users.push({
    id: req.query.id,
    response: res,
  });
});

app.get("/users", (_, res) => {
  res.json({ len: users.length });
});

app.listen(3000);

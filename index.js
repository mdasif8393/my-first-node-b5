const express = require("express");
const app = express();

const port = process.env.port || 5000;

const users = [
  { id: 1, name: "Sabana", email: "Sabana@gmail.com", phone: 010101010101 },
  { id: 2, name: "Kabana", email: "kabana@gmail.com", phone: 0104224242424 },
  { id: 3, name: "Nabana", email: "sabina@gmail.com", phone: 0104646464646 },
  { id: 4, name: "jabana", email: "mabina@gmail.com", phone: 0101737347763 },
  { id: 5, name: "Lolina", email: "jabina@gmail.com", phone: 0101013663363 },
  { id: 6, name: "Jakuna", email: "lobina@gmail.com", phone: 0101036366336 },
];

app.get("/", (req, res) => {
  res.send("Look mama I am using expresssssss");
});

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.send(user);
});

app.listen(port, () => {
  console.log("listening on port", port);
});

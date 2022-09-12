const express = require("express");
const app = express();

const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("Look mama I am using express");
});

app.listen(port, () => {
  console.log("listening on port", port);
});

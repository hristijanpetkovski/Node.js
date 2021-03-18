const express = require("express");
const app = express();
const port = 3030;

// request handler

app.get("/about", (request, response) => {
  response.send("Ova e about page");
});

app.get("/profile", (request, response) => {
  response.send("Ova e profile page");
});

app.get("/history", (request, response) => {
  response.send("Ova e history page");
});

app.post("/adress", (req, res) => {
  res.send("Salvador Allende");
});

app.put("/number", (req, res) => {
  res.send("070-500-000");
});

app.patch("/city", (req, res) => {
  res.send("Skopje");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

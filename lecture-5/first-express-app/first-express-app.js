const express = require("express");
const app = express();
const port = 3000;

// request handler

app.get("/hehe", (request, response) => {
  response.send("This route is hehe");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

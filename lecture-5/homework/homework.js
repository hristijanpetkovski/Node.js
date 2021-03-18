const express = require("express");
const app = express();

app.get("/accept-request", (request, ressponse) => {
  ressponse.send(request.header("accept"));
});

app.get("/host", (request, ressponse) => {
  ressponse.send(request.header("host"));
});

app.get("/user-agent", (request, ressponse) => {
  ressponse.send(request.header("user-agent"));
});

app.get("/content", (request, ressponse) => {
  ressponse.send("Zdravo kako si?");
});

app.get("/connection", (request, ressponse) => {
  ressponse.send("Conection");
});

app.get("/date", (request, ressponse) => {
  ressponse.send("DATE");
});

app.listen(3030, () => {
  console.log("localhost:3030");
});

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(201, "Request").end("Hello World");
});

server.listen(3000);

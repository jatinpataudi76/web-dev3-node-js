// Basic Node.js HTTP server

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from HTTP server!");
});

server.listen(3000, () => {
  console.log("Server started: http://localhost:3000");
});

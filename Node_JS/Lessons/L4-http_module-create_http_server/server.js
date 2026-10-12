const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello ! I am your first server .");
});

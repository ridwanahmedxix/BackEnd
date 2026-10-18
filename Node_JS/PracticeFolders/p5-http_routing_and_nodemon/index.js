const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("Hello Darling");
});

myServer.listen(PORT, hostName, () => {
  console.log(`The server is runing at http://${hostName}:${PORT}`);
});

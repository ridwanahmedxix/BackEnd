const http = require("http");
const fs = require("fs");
const PORT = 2578;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("Hey !");
});

myServer.listen(PORT, hostAddress, () => {
  console.log(`The server is runing at http://${hostAddress}:${PORT}`);
});

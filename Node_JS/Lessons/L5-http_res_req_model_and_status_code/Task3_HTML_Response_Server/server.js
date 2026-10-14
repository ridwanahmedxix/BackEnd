const http = require("http");
const PORT = 2500;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("Hello Darling");
});

myServer.listen(PORT, hostAddress, () => {
  console.log(`The server is runing at http://${hostAddress}:${PORT}`);
});

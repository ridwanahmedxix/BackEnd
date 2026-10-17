const http = require("http");
const PORT = 2600;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("Hello ");
});

myServer.listen(PORT, hostAddress, () => {
  console.log(`The server is runing at http://${hostAddress}:${PORT}`);
});

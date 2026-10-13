const http = require("http");
const PORT = 2800;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/plain" });
});

myServer.listen(PORT, hostAddress, () => {
  console.log(`The server is runing at http://${hostAddress}:${PORT}`);
});

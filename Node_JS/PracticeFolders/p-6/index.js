const http = require("http");
const PORT = 2800;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("What's up");
});

myServer.listen(PORT, hostAddress, () => {
  console.log(`The server is running at http://${hostAddress}:${PORT}`);
});

const http = require("http");
const PORT = 2800;
const hostAddrees = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("I am learning Node JS");
  res.end();
});

myServer.listen(PORT, hostAddrees, () => {
  console.log(`The server is runing at http://${hostAddrees}:${PORT}`);
});

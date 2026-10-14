const http = require("http");
const PORT = 2500;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html , charset=utf-8" });
    res.write(" <h1> Hello World </h1> </br> <p> I am learing node js . </p> ");
    res.end();
  }
});

myServer.listen(PORT, hostAddress, () => {
  console.log(`The server is runing at http://${hostAddress}:${PORT}`);
});

const http = require("http");
const PORT = 2100;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to our college");
    res.end();
  } else if (req.url === "/data") {
    res.writeHead(202, { "content-type": "text/plain" });
    res.write("Total students - 2003 . science - arts only ");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("404 ! Page Not Found");
    res.end();
  }
});

myServer.listen(PORT, hostAddress, () => {
  console.log(`The server is runing at http://${hostAddress}:${PORT}`);
});

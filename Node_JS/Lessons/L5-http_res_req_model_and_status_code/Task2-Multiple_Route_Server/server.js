const http = require("http");
const PORT = 2300;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(202, { "Content-Type": "text/plain" });
    res.write("Welcome to Home Page");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(202, { "Content-Type": "text/plain" });
    res.write("I am learning Backend Development");
    res.end();
  } else if (req.url === "/skills") {
    res.writeHead(202, { "Content-Type": "text/plain" });
    res.write("Node.js, JavaScript, MongoDB");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 - Page Not Found");
    res.end();
  }
});

myServer.listen(PORT, hostAddress, () => {
  console.log(`The server is runing at http://${hostAddress}:${PORT}`);
});

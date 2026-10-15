const http = require("http");

const PORT = 2800;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
  } else {
    res.end("Page Not Found");
  }
});

myServer.listen(hostAddress, PORT, () => {
  console.log("Server started");
});

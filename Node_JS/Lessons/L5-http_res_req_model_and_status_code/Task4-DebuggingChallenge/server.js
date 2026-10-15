const http = require("http");

const PORT = 2800;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Page Not Found");
    res.end();
  }
});

myServer.listen(hostAddress, PORT, () => {
  console.log("Server started");
});

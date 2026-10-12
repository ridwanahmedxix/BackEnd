const http = require("http");
const PORT = 2700;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end("<h2> Welcome to My Server </h2>");
  } else if (req.url === "/about") {
    res.end(" <h2> I am learning Node.js </h2> ");
  } else if (req.url === "/contact") {
    res.end(" <h2> Contact: example@email.com </h2> ");
  } else {
    res.statusCode = 404;
    res.end(" <h2> 404 - Page Not Found </h2> ");
  }
});

myServer.listen(PORT, hostAddress, () => {
  console.log(`The server is runing at http://${hostAddress}:${PORT}`);
});

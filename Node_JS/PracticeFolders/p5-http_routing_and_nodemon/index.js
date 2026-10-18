const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./fiels/home.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
});

myServer.listen(PORT, hostName, () => {
  console.log(`The server is runing at http://${hostName}:${PORT}`);
});

const http = require("http");
const PORT = 2500;
hostName = "127.0.0.1";
const myServer = http.createServer((req, res) => {
  res.end(" <h1> Hello ! I am your first server . </h1>");
});

myServer.listen(PORT, hostName, () => {
  console.log(
    `Your server is runing successfully at- http://${hostName}:${PORT}`,
  );
});

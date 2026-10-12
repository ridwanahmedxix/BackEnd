const http = require("http");

const myServer = http.createServer((req, res) => {
  res.end("Hello ! I am your first server .");
});

myServer.listen(2500, () => {
  console.log("Your server is runing successfully at localhost:2500");
});

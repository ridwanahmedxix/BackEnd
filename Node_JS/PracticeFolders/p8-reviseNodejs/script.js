const http = require("http");
const PORT = 2900;
const hostAddress = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("Hey");
});

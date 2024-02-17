const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
});

let port = 5000;

server.listen(port, "localhost", () => {
  console.log("server listen at port 5000");
});

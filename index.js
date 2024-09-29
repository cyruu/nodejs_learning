const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${Date.now()} at ${req.url}: Request Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home page");
        break;
      case "/about":
        res.end("About page");
        break;
      case "/contact":
        res.end("Contact page");
        break;
      default:
        res.end("Page not found");
        break;
    }
  });
});

server.listen(8000, () => {
  console.log("server running at 8000");
});

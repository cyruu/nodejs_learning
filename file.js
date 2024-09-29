const fs = require("fs");

console.log("1", 1);

// synchronous
fs.readFile("./test.txt", "utf-8", (err, res) => console.log(res));

console.log("2", 1);

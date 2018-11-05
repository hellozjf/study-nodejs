var fsSync = require("fs");

var data = fsSync.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");

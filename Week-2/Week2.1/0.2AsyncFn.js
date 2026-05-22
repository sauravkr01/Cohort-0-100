//sync fn
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum(1, 2));

/*Async Function :-  setTimeOut, readfile , Sending a network request */

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(err);
  console.log(data);
});
console.log("done");

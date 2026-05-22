function square(n) {
  console.log("square called");
  return n * n;
}
function cube(n) {
  return n * n * n;
}

function someOfSquares(a, b, fn) {
  let square1 = fn(a);
  let square2 = fn(b);
  return square1 + square2;
}

let ans = someOfSquares(1, 2, square);
console.log(ans);

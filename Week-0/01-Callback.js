console.log("Start");

setTimeout(function () { // asynchronous fn 
    console.log("A");
}, 2000);

setTimeout(function () {
    console.log("B");
}, 1000);

console.log("End");


// fn k fn fn cll ad iske ande ek ar fn cal and iske andr....... this is called callback hell




//.then()

let p = new Promise(function (resolve, reject) {
    resolve("Saurav");
});

p.then(function (data) { // Promise successful hone ke baad ye function chalao.
    console.log(data);
});

// Promise bana
//       │
//       ▼
// resolve("Saurav")
//       │
//       ▼
// Promise Fulfilled
//       │
//       ▼
// .then() wala function chala
//       │
//       ▼
// data = "Saurav"
//       │
//       ▼
// console.log(data)

// output :- saurav
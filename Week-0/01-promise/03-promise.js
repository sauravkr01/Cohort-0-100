let p = new Promise(function (resolve, reject) {
    reject("Network Error");
});

p.catch(function (err) {
    console.log(err);
});


// Promise
//     │
// reject("Network Error")
//     │
//     ▼
// Promise Rejected
//     │
//     ▼
// .catch()
//     │
//     ▼
// err = "Network Error"
//     │
//     ▼
// console.log(err)

// output :-Network Error
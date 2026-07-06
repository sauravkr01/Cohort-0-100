let p = new Promise(function (resolve, reject) {
    reject("Failed");
});

p.then(function (data) {
    console.log("Success:", data);
});

p.catch(function (err) {
    console.log("Error:", err);
});


// output  :- "Error:" failed
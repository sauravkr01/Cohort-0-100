// my own promise async function

const fs = require('fs');
function sauravReadFile() {
    return new Promise(function(resolve){
        fs.readFile("a.txt" , "utf-8" , function(err, data){
            resolve(data);
        });
    });
}

// callback fuction to call
function onDone(data) {
    console.log(data);
}

sauravReadFile().then(onDone);
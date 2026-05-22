/*var d = new Promise(function(resolve){
    setTimeout(function() {
        resolve("yeah");
    }, 1000)
});

function callback () {
    console.log(d);
}

console.log(d)
d.then(callback)*/

function sauravAsyncFunc() {

    let p = new Promise(function(resolve){
        setTimeout(resolve, 2000)
    });
    return p;
}

const value = sauravAsyncFunc();
value.then(function() {
    console.log("Hii Sauarv")
})
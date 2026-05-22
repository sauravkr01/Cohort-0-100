// Normal syntax
/*function sauravAsyncFunc() {
    let p = new Promise(function(resolve){
        //do some async logic here
        resolve("hii there !")
    });
    return p;
}

function main () {
    sauravAsyncFunc().then(function(value){
        console.log(value);
    });
}

main();*/

//Async/await syntax

/*function sauravAsyncFunc() {
  let p = new Promise(function (resolve) {
    //do some async logic here
    resolve("hii there!");
  });
  return p;
}

async function main() {
  const value = await sauravAsyncFunc();
  console.log(value);
}
main();*/

function sauravAsyncFunc() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    setTimeout(() => {
      resolve("hi there!");
    }, 3000);
  });
  return p;
}

async function main() {
  //no callback , no .then syntax
  let value = await sauravAsyncFunc();
  console.log(value);
  console.log("hii there1");
}
main();
console.log("hii after main");

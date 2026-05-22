// Create your own Async Function
/*
this is non promisify so it does'nt return amy thing but it will take callback an input

function myOwnSetTimeout(callback , duration){
    setTimeout(callback,duration);
}

myOwnSetTimeout(function() {
    console.log("hii there after setTimeOut")
},1000)
*/

// now promisify this Async Fuction , it does return the promise and don't take callback input ( promise is class)

//like new Date() ,
// pahle promise define kro then call kro
// in real life we only call , does'nt need to define

// Define
function promisifyMyOwnSetTimeOut(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, duration);
  });
  return p;
}

//calling
const ans = promisifyMyOwnSetTimeOut(1000);
ans.then(function () {
  console.log("timeout is done");
});


/*
 we use async( promise) in these four condition only
1:- do a network call
2:- sleep/wait for some time 
3:- read a file
4:- database call

baki time async code jo ki callbacks se kr lenge
*/


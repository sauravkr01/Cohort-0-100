//fetch(url) alwayas gives Promise , data nhi deta h

let p = fetch("https://jsonplaceholder.typicode.com/users");

console.log(p);

//output :- Promise {Pending};     this is promise not the actual data

// isilie data nikalne kelie we use :-
//1 : promise style   , 2 : async/await

// promise style

fetch("https://fakerapi.it/api/v1/persons").then(function (response) {
  console.log(response);
});


//async/await style
let response = await fetch("https://fakerapi.it/api/v1/persons");



// but response khud ek object h jiske andr dher sara different type of data pda hoga , isi hum phir se await ka use kr k respose se data niakl lenge nd json format me render krwa lenge
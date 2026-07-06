//👉 Rule #1 (Golden Rule)
// Jis function ke aage async likh doge, wo hamesha Promise return karega.


async function greet() {
    return "Hi";
}

let x = greet();

console.log(x);

// output :- Promise { "Hi" }   , but mujhe "Hi" chahiye tha na ki promise , isilie we now use await

// await ka kaam hai Promise ke andar wali value ko nikalna.
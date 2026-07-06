//Golden Rule #2
// await Promise ke andar ki final value deta hai.


async function hello() {
    return "Hello";
}

async function main() {
    let x = await hello();

    console.log(x);
}

main();
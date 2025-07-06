//window.prompt("Whats Your Name");

//let username = "";

// while(username === "" || username === null ) {
//     username = window.prompt(`Whats your name`)
// }

// console.log(`Hello ${username}`);

// let username;

// do {
//     username = window.prompt(`Whats your name`)
// } while (username === "" || username === null) ;

// console.log(`Hello ${username}`)

let loggedIn = false;
let username;
let password;

// while(!loggedIn || username === null || password === null) {
//     loggedIn = true;
//     username = window.prompt(`Enter Your Username`)
//     password = window.prompt(`Enter Your Password`)

//     if(username === "myUsername" && password === "myPassword") {
//         console.log(`Your Logged in`)
//     } else {
//         console.log(`invalid credentials`)
//     }
// }


do {
    loggedIn = true;
    username = window.prompt(`Enter Your Username`)
    password = window.prompt(`Enter Your Password`)

    if(username === "myUsername" && password === "myPassword") {
        console.log(`Your Logged in !`)
    } else {
        console.log(`invalid credentials`)
    }
} while(!loggedIn || username === null || password === null)
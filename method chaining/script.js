
let username = window.prompt("Whats Your name: ")

// -----No Method Chaining-----

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLocaleLowerCase();

// username = letter + extraChars ;

// console.log(username);

//-----Method Chaining-----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
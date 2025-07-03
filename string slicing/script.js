let fullName = "Taseen Tariq";

// let firstName = fullName.slice(0,6);
// console.log(firstName);

// let lastName = fullName.slice(7,12);
// console.log(lastName);

// let oppName = fullName.slice(-3);
// console.log(oppName);

//if we dont have to count every time then:

// 

const email = "taseentariq5@gmail.com";

let userName = email.slice(0,email.indexOf("@"));
console.log(userName);

let extension = email.slice(email.indexOf("@") + 1);
console.log(extension);


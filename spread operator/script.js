let numbers = [1,2,3,4,5];
//... spreads the string
let max = Math.max(...numbers);
let min = Math.min(...numbers);
//console.log(max)
//console.log(min)

let username = "starboy";

let spreads = [...username].join("-");

//console.log(spreads);

let fruits = ["banana","mango","peach","apple"];
let vegies = ["tomatoes","celery"];

let newFruits = [...fruits,...vegies , "eggs" , "milk"];

console.log(newFruits);
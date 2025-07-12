//spread = expands an array into separate elements
//reat = bundles separate elements into an array

// const food1 = "sushi";
// const food2 = "sushi";
// const food3 = "sushi";
// const food4 = "sushi";
// const food5 = "sushi";

// function openFridge(...foods){
//     return foods;
// }

// console.log(openFridge(food1,food2,food3,food4,food5));

function sum(...numbers){

    let result = 0;

    for(let number of numbers) {
        result += number;
    }
    return result;
}

let total = sum(1,2,3,4,5,6,7,8,9,10);

console.log(`Your Total is $${total}`)

function sumAvg(...numbers){

    let result = 0;

    for(let number of numbers) {
        result += number;
    }
    return (result/numbers.length);
}

let avg = sumAvg(1,2,3,4,5,6,7,8,9,10)

console.log(`Average is $${avg}`);

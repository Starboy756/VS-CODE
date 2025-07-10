
//array = variable like structure that can hold more than one value

// fruits.push("coconut");//added at the end
// fruits.pop();//removes the last element
// fruits.unshift("avocado");//added at the beginning
// fruits.shift();//deleted from the beginning

// let length = fruits.length; //gives the length of array
// console.log(length);

// let index = fruits.indexOf("apple");
// console.log(index);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

let fruits = ["apple","Banana","Mango","Avocado","Peach"];

// for(let i = 0 ; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(let j = 1; j < fruits.length; j+=2){
//     console.log(fruits[j]);
// }

//For REVERSE

for (let i = fruits.length -1; i >= 0 ; i--){
    console.log(fruits[i]);
}

fruits.sort();//sort in alphabetical order
fruits.sort().reverse;//in reverse order

for (let fruit of fruits){
    console.log(fruit)
}
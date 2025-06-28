// document.getElementById("myBtn").onclick = document.getElementById("myH1").textContent ;

// document.getElementById("myH1").textContent = Math.floor(Math.random * 6);

let button = document.getElementById("myBtn");
let h1 = document.getElementById("myH1");

let min = 50;
let max = 99;

// button.onclick = function() {
//     h1.textContent =  h1 = (Math.floor(Math.random() * 10))+1;;
// }

button.onclick = function () {
    h1.textContent = (Math.floor(Math.random() * (max - min))) + min;
}

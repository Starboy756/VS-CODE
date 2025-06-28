const increaseBtn = document.getElementById("incBtn");
const decreaseBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("label0");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count; 
}
decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count; 
}
resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count; 
}
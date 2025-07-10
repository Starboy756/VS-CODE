const submit = document.getElementById("mySubmit");
const radioCtof = document.getElementById("ctof");
const radioFtoc = document.getElementById("ftoc");
const topInput = document.getElementById("input");
const lowerH1 = document.getElementById("answer");

submit.onclick = function(){
    if(radioCtof.checked){
        lowerH1.textContent = ((topInput.value * 9/5) + 32).toFixed(1) + "°F";
    } else if (radioFtoc.checked){
        lowerH1.textContent = ((topInput.value - 32) * 5/9).toFixed(1) + "°C";
    } else {
        lowerH1.textContent = `Select Something Valid`;
    }
};
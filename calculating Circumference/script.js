const pi = 3.14;
let circumference;
let radius;


document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myInput").value;
  radius = Number (radius);      
  circumference = radius * pi * 2;
  console.log(circumference);
  document.getElementById("myH3").textContent = circumference + "cm";
};

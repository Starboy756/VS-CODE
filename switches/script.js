let testScore = 88;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80 && testScore < 90:
        letterGrade = "B";
        break;
}

console.log(letterGrade);
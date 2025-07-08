const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Enter a number Between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please Enter a valid number`)
    } else if(guess < minNum || guess > maxNum) {
        window.alert(`Please Enter a valid number`)            
    } else {
        attempts++;

        if(guess < answer){
            console.log(`Think of Higher Number`)
        } else if (guess > answer) {
            console.log(`Think of lower number`)
        } else {
            console.log (`You Have Guessed it Right it was ${answer} and it took you ${attempts}`)
            running = false;
        }
    }
}
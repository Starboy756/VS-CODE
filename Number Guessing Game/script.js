let minNum = 1 ;
let maxNum = 100;

let answer = Math.round(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Enter a number Between ${minNum} - ${maxNum}`);
    guess = Number (guess);

    if(isNaN(guess)){
        console.log(`Please Enter a valid number`)
    } else if(guess < 0 || guess >100) {
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
// Print random number till you get an even number

let randomNumber = 57;

while (randomNumber%2){
    console.log(randomNumber);
    randomNumber= Math.floor(Math.random() * 100);
}


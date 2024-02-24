console.log("Guessing Game!");
console.log("it works!");

// Let's guess what this code does!

// Write down what you think each line does.

// It's OK if you're not sure, that's why it's a guess!
startButton.onclick = function () {
    alert('Player, are you Ready 1?');

    confirm("Let's play a guessing game.");

    let g = prompt("Guess a number...");

    let guess = parseInt(g);

    if (guess === 9) {
        alert("You got it!");
        startButton.style.backgroundColor = "Green"
    } else {
        alert("No!");
        backgroundColor = "blue"
    }

    alert("Thanks for playing!");
}
// To run this code, copy it and past it into the Console in the Dev Tools.

// Adapted from Head First Programming by Paul Barry

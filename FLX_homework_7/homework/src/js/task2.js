let game = confirm("Do you want to play a game?");
do {
    if(!game){
        alert("You did not become a millionaire, but can.")
    } else{
        let attemptsUsed = 0;
        let attemptsLeft = 3;
        let totalPrize = 0;
        let currentPrize = 10;
        let maxPrize = 10;
        let range = 5;
        let randomNumber = Math.floor(Math.random() * range);
        while (attemptsUsed < 3){
            let userNum = parseInt(prompt(
                "Enter a number from 0 to " + range +
                "\nAttempts left: " + attemptsLeft +
                "\nTotal prize:" + totalPrize +
                "$\nPossible prize on current attempt: " + currentPrize + "$"
            ));
            if (userNum === randomNumber) {
                totalPrize = totalPrize + currentPrize;
                attemptsUsed = 0;
                attemptsLeft = 3;
                range = range * 2;
                maxPrize = maxPrize * 3;
                currentPrize = maxPrize;
                randomNumber = Math.floor(Math.random() * range);
                confirm("Congratulation! Your prize is: " + totalPrize + "$." +
                    " Do you want to continue?");
            } else {
                attemptsUsed++;
                attemptsLeft--;
                currentPrize = Math.floor(maxPrize / (attemptsUsed * 2));
            }
        }
        alert("Thank you for a game. Your prize is: " + totalPrize + "$.");
        game = confirm("Do you want to try again?");
    }
} while (game);

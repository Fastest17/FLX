function userCard(index) {
let key = index;
let balance = 100;
let transactionLimit = 100;
let historyLogs = [];
let date = new Date().toLocaleString('en-GB');
const tax = 0.005;
function historyLogsRegister (type, credits, time) {
    historyLogs.push({
        operationType: type,
        credits: credits,
        operationTime: time
    });
}
return {
    getCardOptions() {
        return {key, balance, transactionLimit, historyLogs};
    },
    putCredits(credits) {
        balance += credits;
        historyLogsRegister('Received credits', credits, date);
    },
    takeCredits(credits) {
        balance -= credits;
        historyLogsRegister('Withdrawal of credits', credits, date);
    },
    setTransactionLimit(credits) {
        transactionLimit = credits;
        historyLogsRegister('Transaction limit change', credits, date);
    },
    transferCredits(credits, userCard) {
        const transfer = tax * credits + credits;
        if (transfer <= balance && transfer <= transactionLimit) {
            this.takeCredits(transfer);
            userCard.putCredits(credits);
        } else {
            console.error('Error, the amount entered exceeds the balance or transaction limit.');
        }
    }
}
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.cardsNum = 3;
    }
    addCard() {
        if (this.cards < this.cardsNum) {
            this.cards.push(userCard(this.cards.length +1));
        } else {
            console.error('Number of user cards exceeded');
        }
    }
    getCardByKey(key) {
        return this.cards[key - 1];
    }
}

// let user = new UserAccount('Bob');
// user.addCard();
// user.addCard();
//
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
//
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
//
// card2.takeCredits(50);
//
// console.log(card1.getCardOptions());
// console.log(card2.getCardOptions());
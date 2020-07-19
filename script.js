let field = document.querySelectorAll('.field');
let firstField = document.getElementById('firstField');
let secondField = document.getElementById('secondField');
let thirdField = document.getElementById('thirdField');
let fourthField = document.getElementById('fourthField');
let fifthField = document.getElementById('fifthField');
let sixthField = document.getElementById('sixthField');
let seventhField = document.getElementById('seventhField');
let eighthField = document.getElementById('eighthField');
let ninthField = document.getElementById('ninthField');
let button = document.getElementById('button');

let freeFields = [firstField, secondField, thirdField, fourthField, fifthField, sixthField, seventhField, eighthField, ninthField];

const userMark = "<span class='markO'>O</span>";
const computerMark = "<span class='markX'>X</span>";

let userChoice = [];
let computerChoice = [];

const removeFromFreeFields = (clickedField) => {
    if (freeFields.indexOf(clickedField) > -1) {
        let indexOfClicked = freeFields.indexOf(clickedField);
        freeFields.splice(indexOfClicked, 1);


    }
}

const userTarget = (e) => {
    let clickedField = e.target;

    if (clickedField && freeFields.indexOf(clickedField) > -1) {
        removeFromFreeFields(clickedField);
        clickedField.innerHTML = userMark;
        userChoice.push(clickedField.id);

        if (isGameOver() === false) {
            computerTarget();
        }
    }
}

const computerTarget = () => {
    if (freeFields.length > 0) {
        let randomNumber = Math.floor(Math.random() * freeFields.length);
        let randomFreeField = freeFields[randomNumber];

        randomFreeField.innerHTML = computerMark;
        removeFromFreeFields(randomFreeField);
        computerChoice.push(randomFreeField.id);

        isGameOver();
    }
}

const checkIfPlayerWon = (playerChoices) => playerChoices.includes(firstField.id) && playerChoices.includes(secondField.id) && playerChoices.includes(thirdField.id) || playerChoices.includes(firstField.id) && playerChoices.includes(fifthField.id) && playerChoices.includes(ninthField.id) || playerChoices.includes(thirdField.id) && playerChoices.includes(fifthField.id) && playerChoices.includes(seventhField.id) || playerChoices.includes(secondField.id) && playerChoices.includes(fifthField.id) && playerChoices.includes(eighthField.id) || playerChoices.includes(fourthField.id) && playerChoices.includes(fifthField.id) && playerChoices.includes(sixthField.id) || playerChoices.includes(seventhField.id) && playerChoices.includes(eighthField.id) && playerChoices.includes(ninthField.id) || playerChoices.includes(firstField.id) && playerChoices.includes(fourthField.id) && playerChoices.includes(seventhField.id) || playerChoices.includes(thirdField.id) && playerChoices.includes(sixthField.id) && playerChoices.includes(ninthField.id)

const isGameOver = () => {
    if (checkIfPlayerWon(computerChoice)) {
        button.innerText = 'COMPUTER WINS! PLAY AGAIN?';
        return true;
    } else if (checkIfPlayerWon(userChoice)) {
        button.innerText = 'YOU WIN! PLAY AGAIN?';
        return true;
    } else if (freeFields.length === 0) {
        button.innerText = 'DRAW! PLAY AGAIN?';
        return true;
    } else {
        return false;
    }
}

const startGame = () => {
    button.innerText = 'START GAME';
    field.forEach(field => { field.innerHTML = '' });
    computerChoice = [];
    userChoice = [];
    freeFields = [firstField, secondField, thirdField, fourthField, fifthField, sixthField, seventhField, eighthField, ninthField];
}


field.forEach(field => { field.addEventListener('click', userTarget) });

button.addEventListener('click', startGame);
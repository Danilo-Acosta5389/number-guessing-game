


const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber  + ' - Woopsi. You got caught cheating!');

const inputField = document.querySelector('.guessField');
const button = document.querySelector('.button');
const resetBtn = document.querySelector('.restartBtn');

const result = document.getElementById('result');
const yourGuess = document.querySelector('.yourGuess');
const guesses = document.querySelector('.guesses');


const show = document.querySelector('.mainThing');
const winner = document.querySelector('.winner');
const loser = document.querySelector('.loser');


const list = document.querySelector('.listAttempts');

let maxGuesses = 0;

inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        button.click();
    }
})

clearInput = () => {
    var getValue = document.getElementById("input");
      if (getValue.value !="") {
          getValue.value = "";
      }

      return getValue;
}


userGuess = () => {
    /* console.log('hey'); */
    const userNumber = Number(inputField.value);
    console.log(userNumber);
    const newLi = document.createElement('li');
    /* newLi.innerText = userNumber;
    list.appendChild(newLi); */

    clearInput();



    if (userNumber == randomNumber) {

        yourGuess.textContent = userNumber;
        guesses.textContent = 'Correct. You won!';
        result.textContent = userNumber;

        show.classList.add('show');
        winner.classList.add('win');
        console.log('You won!');

        maxGuesses++;

        newLi.innerText = userNumber;
        list.appendChild(newLi)

    } 

    /* console.log('number is: ' + userNumber); */

    if (userNumber < randomNumber && userNumber > 0) {
        console.log('Too low')
        yourGuess.textContent = userNumber;
        guesses.textContent = 'Too low'
        maxGuesses++;

        newLi.innerText = userNumber;
        list.appendChild(newLi);

    } else if (userNumber < 1) {
        console.log('nope');
        guesses.textContent = 'Please input number between 1 and 100.';
    }

    if (userNumber > randomNumber && userNumber < 101) {
        console.log('Too high');
        yourGuess.textContent = userNumber;
        guesses.textContent = 'Too high';
        maxGuesses++;

        newLi.innerText = userNumber;
        list.appendChild(newLi);

    } else if (userNumber > 100) {
        console.log('too much');
        guesses.textContent = 'Please input number between 1 and 100.';
    }

    console.log(maxGuesses);

    if (maxGuesses == 5) {

        show.classList.add('show');
        loser.classList.add('lose');

        console.log('Game over!');
        /* window.location.reload(false); */
    }
}

restartGame = () => {
    window.location.reload(false);
}
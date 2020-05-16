
let newGame = document.getElementById('newGame')
let spaceman = document.getElementById('spacemanHead')

//index 0 is the word
//index 1 is the hint
//index 2 is the individual letters
let spacewords = [
    ['Jefferson City', "The captial of Missouri"],

    ['Missouri', 'The Show Me State'],

    ['Kansas', 'Tornado Alley']
]

let answer = '';
let word = '';
let guessed = [];

function randomWord() {
    index = Math.round(Math.random() * (spacewords.length - 1));
    answer = spacewords[index][0];
}

function makeButtons() {
    let buttonsHTML = 'ABCDEFGHIJKLM'.split('').map(letter =>
        `
        <th>
            <button id='${letter}' onClick='handleGuess('${letter}')'>
                ${letter}
            </button>
        </th>
        `).join('');

    document.getElementById('buttonsOne').innerHTML = buttonsHTML;

    let buttonsTwoHTML = 'NOPQRSTU'.split('').map(letter =>
        `
        <th>
            <button id='${letter}' onClick='handleGuess('${letter}')'>
                ${letter}
            </button>
        </th>
        `).join('');

    document.getElementById("buttonsTwo").innerHTML = buttonsTwoHTML;

    let buttonsThreeHTML = 'VWXYZ'.split('').map(letter =>
        `
        <th>
            <button id='${letter}' onClick='handleGuess('${letter}')'>
                ${letter}
            </button>
        </th>
        `).join('');

    document.getElementById("buttonsThree").innerHTML = buttonsThreeHTML;
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    alert(answer);

    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
    }
}

function guessedWord() {

    word = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_")).join(' ');

    document.getElementById('spaceword').innerHTML = word;
}



randomWord();
makeButtons();
guessedWord();
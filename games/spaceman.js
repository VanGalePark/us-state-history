
let newGame = document.getElementById('newGame')
let spaceman = document.getElementById('spacemanHead')

//index 0 is the word
//index 1 is the hint
//index 2 is the individual letters
let spacewords = [
    ['ALABAMA', "Sweet Home ________"],

    ['MISSOURI', 'The Show Me State'],

    ['KANSAS', 'Tornado Alley'],

    ['WASHINGTON', 'The Evergreen State'],

    ['JEFFERSON CITY', 'The Capital of Missouri'],

    ['NORTH CAROLINA', 'The Tar Heel State'],

    ['OREGON', 'The Beaver State']
]

let index = 0
let answer = '';
let word = null;
let guessed = [];
let mistakes = 0;
let maxWrong = 6;

function randomWord() {
    index = Math.floor(Math.random() * spacewords.length)
    answer = spacewords[index][0];

    console.log(answer)
    console.log(spacewords.length)
}

function makeButtons() {
    let buttonsHTML = 'ABCDEFGHIJKL'.split('').map(letter =>
        `
        <th>
            <button id='${letter}' onClick='handleGuess("${letter}");disabled=true'>
                ${letter}
            </button>
        </th>
        `).join('');

    document.getElementById('buttonsOne').innerHTML = buttonsHTML;

    let buttonsTwoHTML = 'MNOPQRSTU'.split('').map(letter =>
        `
        <th>
            <button id='${letter}' onClick='handleGuess("${letter}");disabled=true'>
                ${letter}
            </button>
        </th>
        `).join('');

    document.getElementById("buttonsTwo").innerHTML = buttonsTwoHTML;

    let buttonsThreeHTML = 'VWXYZ'.split('').map(letter =>
        `
        <th>
            <button id='${letter}' onClick='handleGuess("${letter}");disabled=true'>
                ${letter}
            </button>
        </th>
        `).join('');

    document.getElementById("buttonsThree").innerHTML = buttonsThreeHTML;

    document.getElementById('space').innerHTML = `
    <th>
        <button style='padding-right: 50px; padding-left: 50px;' onClick='handleGuess(" ");disabled=true'>Space Bar</button>
    </th>
    `
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    //document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (mistakes === maxWrong) {
        mistakes = 6;
        
    }else if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkGameWin();

    }else if (answer.indexOf(chosenLetter) === -1) {
        mistakes = mistakes + 1;
        updateMistakes();
        checkGameLose();
        updateSpacePicture();
    } 
}

function updateSpacePicture() {
    document.getElementById('spacemanImg').src = `../images/abducted${mistakes}.png`;
}

function checkGameWin() {
    if (word === answer) {
        document.getElementById('letters').innerHTML = `<p style='font-size: 30px;'>You win!!</p>`
    }
}

function checkGameLose() {
    if (mistakes === maxWrong) {
        document.getElementById('spaceword').innerHTML = `<p>The word was: ${answer}</p>`
        document.getElementById('letters').innerHTML = `<p style='font-size: 30px;>  You lost :(</p>`
    }
}

function guessedWord() {
    word = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('spaceword').innerHTML = word;
}

function updateMistakes() {
    document.getElementById('wrong').innerHTML = mistakes;
}

function showHint() {
    index = Math.floor(Math.random() * spacewords.length)
    document.getElementById('hint') = `${spacewords[index][1]}`
}

function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('spacemanImg').src = '../images/abducted0.png'
    document.getElementById('letters').innerHTML = ''

    randomWord();
    guessedWord();
    updateMistakes();
    makeButtons();
}



randomWord();
makeButtons();
guessedWord();
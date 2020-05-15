function init() {
    let spaceman = document.getElementById("spacemanHead");
    let newGame = document.getElementById("newGame");
    let img = document.getElementById("image");

    let spaceWords = [["Jefferson City", "Capital of Missouri", 
    ["j", "e", "f", "f", "e", "r", "s", "o", "n", "c", "i", "t", "y",]],

    "Missouri", "The Show Me State", 
    ['m', 'i', 's', 's', 'o', 'u', 'r', 'i',]]

    let word = Math.round(Math.random()*(spaceWords.length - 1));

    let image = [1, 2, 3, 4, 5, 6]

    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z']

    let wrongLetters = []
    let rightLetters = []

    let wordLength = [];

    for(let i = 0; i < alphabet.length;i++) {
        let letter = document.getElementById(`${alphabet[i]}`)

        letter.addEventListener("click", function() {
            letter.disabled = true;

            for(let y = 0; y < spacewords[word][2].length; y++) {
                if(letter === y) {
                    rightLetters.push(letter);
                } else if(letter !== y){
                    wrongLetters.push(letter);

                    for(let w = 0; w < image.length; w++) {
                        img.innerHTML = `<img id='image' style='width: 50%' src="../images/abducted${[w]}.png">`
                    }
                }
            }
            
        })

        newGame.addEventListener("click", function() {
            letter.disabled = false;

            for(let i = 0; i < spacewords[word][2].length; i++) {
                wordLength.push(_);
            }

            spaceman.innerHTML = `
            <div>
                <table>
                    <tr>
                        <th>
                            <img id='image' style="width:50%" src="../images/abducted0.png" alt="first stage">
                        </th>
                        <th>
                            <p>${wrongLetters.toString()}</p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p>${wordLength.toString()}</p>
                        </th>
                    </tr>
                </table>
            </div>
            `

            wrongLetters = [];
            rightLetters = [];
        
        })
    }

    
}

window.onload = init;
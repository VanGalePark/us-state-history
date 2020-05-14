function init() {
    let spaceman = document.getElementById("spacemanHead")

    let spaceWords = [["Jefferson City", "Capital of Missouri", 
    ["J", "e", "f", "f", "e", "r", "s", "o", "n", "C", "i", "t", "y",]]]

    


    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z']

    for(let i = 0; i < alphabet.length;i++) {
        let letter = document.getElementById(alphabet[i])

        alphabet[i].addEventListener("click", function() {
            alphabet[i].disabled = true;
        })
    }
}

window.onload = init;
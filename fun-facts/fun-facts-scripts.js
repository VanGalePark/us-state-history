function init() {
    let randomFact = document.getElementById("randomFact");
    let randomButton = document.getElementById("randomButton");

    let factsArray= [["Missouri", "MO", "Show Me State", 
    ["The city, Kansas City, originated in Missouri.<br>" + 
    "They started out as the Town of Kansas. Then, the state of Kansas came" + 
    "along and people who lived<br>near the Town of Kansas (now renamed to the City" + 
    "of Kansas) decided they too wanted a Town of Kansas. Later they merged to" + 
    "become the whole Kansas City!",
    "Richland, Missouri is the only state in the US to have a cave restaurant!"]],
        ["Kansas", "KS", "Sunflower State", []],
        ["Oklahoma", "OK", "Sooner State", []],
        ["Washington", "WA", "Evergreen State", []],
        ["Alabama", "AL", "Yellowhammer State", []],
        ["Alaska", "AK", "Last Frontier", []],
        ["Arizona", "AZ", "Grand Canyon State", []],
        ["Arkansas", "AR", "Natural State", []],
        ["Colorado", "CO", "Contennial State", []],
        ["California", "CA", "Golden State", []],
        ["Connecticut", "CT", "Constitution State", []],
        ["Delaware", "DE", "First State", []],
        ];


    randomButton.addEventListener("click", function() {
        let index = Math.round(Math.random()*11);
        let factIndex = Math.round(Math.random()*1);

        randomFact.innerHTML = `
            <div>
                <table style="margin: auto; background-color: #9e9ee6; border-radius: 8px; border-style: dashed;">
                    <tr>
                        <th>
                            <h2 style="font-size: 60px; line-height: 0px;">${factsArray[index][0]}, ${factsArray[index][1]}</h2>
                            <p style="font-size: 25px;"> The ${factsArray[index][2]} </p> 
                            <p style="line-height: 25px; padding: 5px;"> ${factsArray[index][3][factIndex]} </p>       
                        </th>
                    </tr>
                </table>
            </div>
            `
        
    })

    

}

window.onload = init;
function init() {
    let fact = document.getElementById("fact");
    let randomButton = document.getElementById("randomButton");
    let searchButton = document.getElementById("searchButton");
    let searchText = document.getElementById("search");
    let error = document.getElementById("error");

    //index 0 is state name
    //index 1 is state abbreviation
    //index 2 is state nickname
    //index 3 is fun fact
    let factsArray= [["Missouri", "MO", "Show Me State", 
    ["The city, Kansas City, originated in Missouri.<br>" + 
    "They started out as the Town of Kansas. Then, the state of Kansas came " + 
    "along and people who lived<br>near the Town of Kansas (now renamed to the City " + 
    "of Kansas) decided they too wanted a Town of Kansas. Later they merged to " + 
    "become the whole Kansas City!",

    "Richland, Missouri is the only state in the US to have a cave restaurant! " + 
    "<br>Plus with 6000 known caves, Missouri is also known as The Cave State!", 

    "Aunt Jemima pancake flour was invented in St. Louis in 1889.<br>It was the " + 
    "first ready-mix food to ever be sold commercially.",
    
    "Missouri is one of 12 states with its own official horse.<br>The Missouri Fox " +
    "Trotter is a mid-sized muscular breed from the Ozarks that's popular on ranches."]],

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
        ["Florida", "FL", "Sunshine State", []],
        ["Georgia", "GA", "Peach State", []],
        ["Hawaii", "HI", "Aloha State", []],
        ["Idaho", "ID", "Gem State", []],
        ["Illinois", "IL", "Prarie State", []],
        ["Indiana", "IN", "Crossroads of America", []],
        ["Iowa", "IA", "Hawkeye State", []],
        ["Kentucky", "KY", "Bluegrass State", []],
        ["Louisiana", "LA", "Pelican State", []],
        ["Maine", "ME", "Pine Tree State", []],
        ["Maryland", "MD", "Old Line State", []],
        ["Massachusetts", "MA", "Bay State", []],
        ["Michigan", "MI", "Great Lake State", []],
        ["Minnesota", "MN", "North Star State", []],
        ["Mississippi", "MS", "Magnolia State", []],
        ["Montana", "MT", "Treasure State", []],
        ["Nebraska", "NE", "Cornhusker State", []],
        ["Nevada", "NV", "Silver State", []],
        ["New Hampshire", "NH", "Granite State", []],
        ["New Jersey", "NJ", "Garden State", []],
        ["New Mexico", "NM", "Land of Enchantment", []],
        ["New York", "NY", "Empire State", []], 
        ["North Carolina", "NC", "Tar Heel State", []],
        ["North Dakota", "ND", "Peace Garden State", []],
        ["Ohio", "OH", "Buckeye State", []],
        ["Oregon", "OR", "Beaver State", []],
        ["Pennsylvania", "PA", "Keystone State", []],
        ["Rhode Island", "RI", "Ocean State", []],
        ["South Carolina", "SC", "Palmetto State", []],
        ["South Dakota", "SD", "Mouth Rushmore State", []],
        ["Tennessee", "TN", "Volunteer State", []],
        ["Texas", "TX", "Lone Star State", []],
        ["Utah", "UT", "Beehive State", []],
        ["Vermont", "VT", "Green Mountain State", []],
        ["Virginia", "VA", "Old Dominion", []],
        ["West Virginia", "WV", "Mountain State", []],
        ["Wisconsin", "WI", "Badger State", []],
        ["Wyoming", "WY", "Equality State", []]];

    let colors = ["#ffbdc7", "#ffbdd6", "#ffbdf7", "#f0abff", "#c994ff", "#a494ff",
        "#94abff", "#94caff", "#94f1ff", "#b3ffed", "#b5ffd4", "#94ffa0", "#c1ffb5",
        "#daffb5", "#f4ffb5", "#fff3b5", "#ffd8b5", "#ffc4b5"]

    randomButton.addEventListener("click", function() {
        let index = Math.round(Math.random()*49);
        let factIndex = Math.round(Math.random()*2);
        let colorIndex = Math.round(Math.random()*17);

        fact.innerHTML = `
            <div>
                <table style="margin: auto; background-color: ${colors[colorIndex]}; border-radius: 8px; border-style: dashed;">
                    <tr>
                        <th style="font-family: Arial, Helvetica, sans-serif;">
                            <h2 style="font-size: 60px; line-height: 0px;">${factsArray[index][0]}, ${factsArray[index][1]}</h2>
                            <p style="font-size: 25px;"> The ${factsArray[index][2]} </p> 
                            <p style="line-height: 25px; padding: 5px;"> ${factsArray[index][3][factIndex]} </p>       
                        </th>
                    </tr>
                </table>
            </div>
            `
    })

    searchButton.addEventListener("click", function() {
        let factIndex = Math.round(Math.random()*2);
        let colorIndex = Math.round(Math.random()*17);

        let search = searchText.value
        let searchLower = search.toLowerCase();
        
        for(i = 0; i < factsArray.length; i++) {

            if(factsArray[i][0].toLowerCase() === searchLower) {
                fact.innerHTML = `
                <div>
                    <table style="margin: auto; background-color: ${colors[colorIndex]}; border-radius: 8px; border-style: dashed;">
                        <tr>
                            <th style ="font-family: Arial, Helvetica, sans-serif;">
                                <h2 style="font-size: 60px; line-height: 0px;">${factsArray[i][0]}, ${factsArray[i][1]}</h2>
                                <p style="font-size: 25px;"> The ${factsArray[i][2]} </p> 
                                <p style="line-height: 25px; padding: 5px;"> ${factsArray[i][3][factIndex]} </p>       
                            </th>
                        </tr>
                    </table>
                </div>
                `
            } else if(search === ""){
                fact.innerHTML = `
                <div>
                    <p style="font-size: 25px; padding-left: 50px;">I can't find a state if one isn't entered :(</p>
                </div>    
                `
             }
        }
        event.preventDefault()
    })
}

window.onload = init;
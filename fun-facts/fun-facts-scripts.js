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
        "Trotter is a mid-sized muscular breed from the Ozarks that's popular on ranches.",
    
        "Missouri has the biggest <u>nylon<u> ball of twine."]],

        //kansas
        ["Kansas", "KS", "Sunflower State", 
        ["Kansas has so many tornadoes, it has the nickname 'Tornado Alley'.",

        "Kansas produced enough wheat in a year to provide every person<br>on earth " + 
        "with six loaves of bread. ",
    
        "At one time, it was against the law to serve ice cream on cherry pie.",
    
        "Another name for the state of Kansas is the The Wheat State.<br> " +
        "I can't imagine why.",
        
        "Kansas produced a record 492.2 million buchels of what in 1997, enough<br>" +
        "to make 35.9 billion loaves of bread.",
    
        "Kansas is one of three states that produce helium, the other two<br>" +
        "being Texas and Oklahoma.",
    
        "Kansas has the biggest <u>community<u> ball of <u>sisal<u> twine."]],
        
        //oklahoma
        ["Oklahoma", "OK", "Sooner State", 
        ["The nickname, Sooner State, comes from those who tried to sneak<br>" + 
        "into the state and made land claims 'sooner' than they were allowed to.",
    
        "Oklahoma has the most man-made lakes in the US with over 200.<br>" +
        "The state's only natural lakes are Oxbow and Playa lakes.",
    
        "The Poteau River is the only river in Oklahoma that flows north.",
        
        "Oklahoma is one of three states that produce helium, the other two<br>" +
        "being Texas and Kansas.",
        
        "Pensacola, OK was the site of an 1862 Civil War battle.<br>" +
        "The Confederates won."]],

        //washington
        ["Washington", "WA", "Evergreen State", []],
        ["Alabama", "AL", "Yellowhammer State", []],
        ["Alaska", "AK", "Last Frontier", []],
        ["Arizona", "AZ", "Grand Canyon State", []],
        ["Arkansas", "AR", "Natural State", 
        []],

        //colorado
        ["Colorado", "CO", "Contennial State", []],
        ["California", "CA", "Golden State", []],
        ["Connecticut", "CT", "Constitution State", []],
        ["Delaware", "DE", "First State", []],
        ["Florida", "FL", "Sunshine State", []],
        ["Georgia", "GA", "Peach State", []],
        ["Hawaii", "HI", "Aloha State", []],

        //idaho
        ["Idaho", "ID", "Gem State", 
        ["Idaho is also known as The Potato State because the combination<br>" +
        "of their rich volcanic soil, water from melting snow in nearby mountains,<br>" +
        "clean air, sunny days, and cool nights produce high quality potatoes."]],

        //illinois
        ["Illinois", "IL", "Prarie State", []],
        ["Indiana", "IN", "Crossroads of America", []],
        ["Iowa", "IA", "Hawkeye State", []],
        ["Kentucky", "KY", "Bluegrass State", []],
        ["Louisiana", "LA", "Pelican State", []],

        //maine
        ["Maine", "ME", "Pine Tree State", 
        ["In Rumford, Maine it is against the law to bite your landlord."]],

        //maryland
        ["Maryland", "MD", "Old Line State", []],

        //massachusetts
        ["Massachusetts", "MA", "Bay State", 
        ["On January 15th, 1919 was the Great Molasses Flood, also known as the Boston " + 
        "Molassacre. A large storage tank filled with 2.3 million gallons of mollasses " + 
        "burst and rushed through the streets at about 35 mph, killing 21 people and " +
        "injuring 150. Many residents claimed that the area still smelled of molasses on " +
        "hot summer days.",
    
        "It is against the law in Massachusetts to lounge on shelves in a bakery.<br>" + 
        "Will you be arrested and sent to jail for it? I'd guess not but, be careful<br>" +
        "anyways."]],

        //michigan
        ["Michigan", "MI", "Great Lake State", []],

        //minnesota
        ["Minnesota", "MN", "North Star State", 
        ["Minnesota has the largest ball of twine <u>built by one person<u>."]],

        //mississippi
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

        //texas
        ["Texas", "TX", "Lone Star State", 
        ["Texas is one of three states that produce helium, the other two<br>" +
        "being Kansas and Oklahoma."]],

        //utah
        ["Utah", "UT", "Beehive State", []],
        ["Vermont", "VT", "Green Mountain State", []],
        ["Virginia", "VA", "Old Dominion", []],
        ["West Virginia", "WV", "Mountain State", []],

        //wisconsin
        ["Wisconsin", "WI", "Badger State", 
        ["Wisconsin has the <u>heaviest<u> ball of twine."]],

        //wyoming
        ["Wyoming", "WY", "Equality State", []]];

    let colors = ["#ffbdc7", "#ffbdd6", "#ffbdf7", "#f0abff", "#c994ff", "#a494ff",
        "#94abff", "#94caff", "#94f1ff", "#b3ffed", "#b5ffd4", "#94ffa0", "#c1ffb5",
        "#daffb5", "#f4ffb5", "#fff3b5", "#ffd8b5", "#ffc4b5"]

    randomButton.addEventListener("click", function() {
        let index = Math.round(Math.random()*49);
        let factIndex = Math.round(Math.random()*(factsArray[index][3].length-1));
        let colorIndex = Math.round(Math.random()*(colors.length-1));
        
        fact.innerHTML = `
            <div>
                <table style="margin: auto; background-color: ${colors[colorIndex]}; border-radius: 8px; border-style: dashed;">
                    <tr>
                        <th>
                            <h2 style="font-size: 60px; line-height: 0px; font-weight: bold;">${factsArray[index][0]}, ${factsArray[index][1]}</h2>
                            <p style="font-size: 25px;"> The ${factsArray[index][2]} </p> 
                            <p style="line-height: 25px; padding: 5px;"> ${factsArray[index][3][factIndex]} </p>       
                        </th>
                    </tr>
                </table>
            </div>
            `
    })

    searchButton.addEventListener("click", function() {

        let search = searchText.value
        let searchLower = search.toLowerCase();
        
        for(i = 0; i < factsArray.length; i++) {
            let factIndex = Math.round(Math.random()*(factsArray[i][3].length-1));      

            if(factsArray[i][0].toLowerCase() === searchLower) {
                let colorIndex = Math.round(Math.random()*(colors.length-1));
                console.log(colorIndex)
                
                fact.innerHTML = `
                <div>
                    <table style="margin: auto; background-color: ${colors[colorIndex]}; border-radius: 8px; border-style: dashed;">
                        <tr>
                            <th>
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
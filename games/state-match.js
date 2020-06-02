function init() {
    let image = document.getElementById('image')

    let submit = document.getElementById('submitButton')
    let newState = document.getElementById('newstatebutton')
    newState.disabled=true;

    let answer = document.getElementById('answer');
    let results = document.getElementById('result')

    let states = [
        ['alabama', 'AL'],
        ['alaska', 'AK'],
        ['arizona', 'AZ'],
        ['arkansas', 'AR'],
        ['california', 'CA'],
        ['colorado', 'CO'],
        ['connecticut', 'CA'],
        ['delaware', 'DE'],
        ['florida', 'FL'],
        ['georgia', 'GA'],
        ['hawaii', 'HI'],
        ['idaho', 'ID'],
        ['illinois', 'IL'],
        ['indiana', 'IN'], 
        ['iowa', 'IA'], 
        ['kansas', 'KS'],
        ['kentucky', 'KY'],
        ['louisiana', 'LA'],
        ['maine','ME'],
        ['maryland', 'MD'],
        ['massachusetts', 'MA'],
        ['michigan', 'MI'],
        ['minnesota', 'MN'],
        ['mississippi','MS'],
        ['missouri', 'MO'],
        ['montana', 'MT'],
        ['nebraska', 'NE'],
        ['nevada', 'NV'],
        ['new hampshire', 'NH'],
        ['new jersey', 'NJ'],
        ['new mexico', 'NM'],
        ['new york', 'NY'],
        ['north carolina', 'NC'],
        ['north dakota', 'ND'],
        ['ohio', 'OH'],
        ['oklahoma', 'OK'],
        ['oregon', 'OR'],
        ['pennsylvania', 'PA'],
        ['rhode island', 'RI'],
        ['south carolina', 'SC'],
        ['south dakota', 'SD'],
        ['tennessee', 'TN'], 
        ['texas', 'TX'],
        ['utah', 'UT'],
        ['vermont', 'VT'],
        ['washington', 'WA'],
        ['west virginia', 'WV'],
        ['wisconsin', 'WI'],
        ['wyoming', 'WY']
    ]

    let points = 28;

    let randomState = Math.round(Math.random()*49);

    image.innerHTML = `<th>
    <img width="400px" src='../images/${states[randomState][0]}.png' alt='${states[randomState]}'>
    </th>`

    submit.addEventListener('click', function() {
        if(points <= 29) {
            
            if(answer.value.toLowerCase().trim() === states[randomState][0]) {
                points++
                document.getElementById('points').innerHTML=points;
    
                results.innerHTML = `<p style="text-align: center; font-size: 20px">CORRECT!</p>`
            } else {
                points--
                document.getElementById('points').innerHTML=points;
    
                results.innerHTML = `<p style="text-align: center; font-size: 20px">THE ANSWER WAS ${states[randomState][0].toUpperCase()}!</p>`
            }

        } else {

            if(answer.value.toUpperCase().trim() === states[randomState][1]) {
                points++
                document.getElementById('points').innerHTML=points;
    
                results.innerHTML = `<p style="text-align: center; font-size: 20px">CORRECT!</p>`

            } else {
                points--
                document.getElementById('points').innerHTML=points;
    
                results.innerHTML = `<p style="text-align: center; font-size: 20px">THE ANSWER WAS ${states[randomState][1].toUpperCase()}!</p>`

            }
        }

        submit.disabled = true;
        newState.disabled = false;

        if(points <= 9){
            document.getElementById('awards').innerHTML = `<tr>
            </tr>`

        }else if(points >= 10 && points <= 19) {
            document.getElementById('awards').innerHTML = `<tr>
                <img width='200px' src='../images/10points.png'> 
            </tr>`

        } else if (points >= 20 && points <= 29) {
            document.getElementById('awards').innerHTML = `<tr>
                <img width='200px' src='../images/10points.png'> 
                <img width='200px' src='../images/20points.png'>
            </tr>`

        } else if (points >= 30 && points <= 49) {
            document.getElementById('awards').innerHTML = `<tr>
                <img width='200px' src='../images/10points.png'> 
                <img width='200px' src='../images/20points.png'>
                <img width='200px' src='../images/30points.png'>
            </tr>`

        } else if (points <= 50) {
            document.getElementById('awards').innerHTML = `<tr>
                <img width='200px' src='../images/10points.png'> 
                <img width='200px' src='../images/20points.png'>
                <img width='200px' src='../images/30points.png'>
                <img width='200px' src='../images/50points.png'>
            </tr>`

        }

        event.preventDefault();
        
    })

    newState.addEventListener('click', function() {
        randomState = Math.round(Math.random()*49);

        image.innerHTML = `<th>
        <img width="400px" src='../images/${states[randomState][0]}.png' alt='${states[randomState]}'>
        </th>`

        answer.value = ''
        results.innerHTML = ``
        submit.disabled = false;
        newState.disabled = true;

        if(points <= 29) {
            document.getElementById('instructions').innerHTML = `
                Enter the <u>name of the state!</u>`
        } else {
            document.getElementById('instructions').innerHTML = `
                Enter the <u style='color:#068A59;'>state's abbreviation!</u>`

            document.getElementById('gameTable').style.backgroundColor = '#3C9D79'
        }

        console.log(states[randomState])
    })



}

window.onload = init()
function init() {
    let image = document.getElementById('image')

    let submit = document.getElementById('submitButton')
    let newState = document.getElementById('newstatebutton')

    let answer = document.getElementById('answer');
    let results = document.getElementById('result')

    let states = [
        'alabama',
        'alaska',
        'arizona',
        'arkansas',
        'california',
        'colorado',
        'connecticut',
        'delaware',
        'florida',
        'georgia',
        'hawaii',
        'idaho',
        'illinois',
        'indiana',
        'iowa',
        'kansas',
        'kentucky',
        'louisiana',
        'maine',
        'maryland',
        'massachusetts',
        'michigan',
        'minnesota',
        'mississippi',
        'missouri',
        'montana',
        'nebraska',
        'nevada',
        'new hampshire',
        'new jersey',
        'new mexico',
        'new york',
        'north carolina',
        'north dakota',
        'ohio',
        'oklahoma',
        'oregon',
        'pennsylvania',
        'rhode island',
        'south carolina',
        'south dakota',
        'tennessee',
        'texas',
        'utah',
        'vermont',
        'washington',
        'west Virginia',
        'wisconsin',
        'wyoming.'
    ]

    let points = 0;

    let randomState = Math.round(Math.random()*49);

    image.innerHTML = `<th>
    <img src='../images/${states[randomState]}.jpeg' alt='${states[randomState]}'>
    </th>`

    submit.addEventListener('click', function() {
        if(answer.value.toLowerCase() === states[randomState]) {
            points++
            document.getElementById('points').innerHTML=points;

            results.innerHTML = `<p style="text-align: center; font-size: 20px">CORRECT!</p>`
        } else {
            points--
            document.getElementById('points').innerHTML=points;

            results.innerHTML = `<p style="text-align: center; font-size: 20px">THE ANSWER WAS ${states[randomState].toUpperCase()}!</p>`
        }

        event.preventDefault();

        submit.disabled = true;
        
    })

    newState.addEventListener('click', function() {
        randomState = Math.round(Math.random()*49);

        image.innerHTML = `<th>
        <img src='../images/${states[randomState]}.jpeg' alt='${states[randomState]}'>
        </th>`

        answer.value = ''
        results.innerHTML = ``
        submit.disabled = false;
    })



}

window.onload = init()
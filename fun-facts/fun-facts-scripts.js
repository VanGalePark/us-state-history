function init() {
    let fact = document.getElementById("fact");
    let randomButton = document.getElementById("randomButton");
    let searchButton = document.getElementById("searchButton");
    let searchText = document.getElementById("search");
    let error = document.getElementById("error")

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
    
        "Missouri has the biggest <u>nylon</u> ball of twine.",
    
        "The state is home to the deadliest tornado in US history, the Tri-State tornado of<br>" +
        "Marth 8th, 1925. It killed 695 people, injured 2027, and destroyed about 15,000 homes."]],

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
    
        "Kansas has the biggest ball of <u>sisal</u> twine built by a <u>community</u>."]],
        
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
        "The Confederates won.",
        
        "Because of the frequent sightings, there is an annual Big Foot Festival<br> " +
        "in eastern Oklahoma."]],

        //washington
        ["Washington", "WA", "Evergreen State", 
        [`Hells Canyon is the deepest gorge in North America at 8,000 feet.`,
        
        "Snoqualmie Falls is 100 feet higher than New York's Niagra Falls.",
    
        "Washington is the only state named after a president.",
    
        "The first ever Starbucks was opened in Seattle's Pike Place Market in 1971."]],

        //alabama
        ["Alabama", "AL", "Yellowhammer State", 
        ["Montgomery, Alabama had the first ever city wide electric trolly system. In 1862<br>" +
        "the Capital City Railway Company began service to what soon would be known as, <br>" +
        "`The Lightning Route`. After 50 years, The Lightning Route was replaced by busses.",
    
        "Anniston, Alabama has the world's largest office chair, which is made from 10 tons of steel.<br>" +
        "<img style='border-style:solid;' alt='world's largest office chair' src='https://www.roadsideamerica.com/attract/images/al/ALANNchair_8960.jpg'> ",
    
        "The only confirmed person to have ever survived being hit by a meteorite was an Ann Hodges on<br>" +
        "November 30th, 1954 while she was napping on her couch. This happened in Oak Grove, Alabama.",
    
        "In May of 1892 it started to rain eels. They started to pile up in the street and farmers<br>" +
        "would take them as fertilizer material. Alabama is <u>not</u> the only state this ever happened to.",
    
        "The Wright brothers, Orville and Wilbur, opened the first ever aviation school outside of<br>" +
        "Montgomery, Alabama.",
    
        "There really is a place in Alabama called <a href='https://www.youtube.com/watch?v=ye5BuYf8q4o'>Sweet Home<a>. It's not a town, but a historic house<br>" +
        "in Bessemer, AL, built by William E. Benns in 1906."]],

        //alaska
        ["Alaska", "AK", "Last Frontier", 
        ["Alaska has more coastline than the rest of the US combined, including Alaska's islands.",
    
        "In September, the Alaskan wood frog freeze. They don't freeze solid but two thirds of their<br>" +
        "body water turns to ice until around May the next year.",
    
        "In Whittier, Alaska almost all of it's 217 residents live in the same building, Begich Towers,<br>" +
        "a Cold War-era army barracks built in 1974.<br>" +
        "<img width=500 alt='Begich Towers' src='https://www.adn.com/resizer/bjgmsYikKf8TC2hukn5-gYunyn0=/1200x0/s3.amazonaws.com/arc-wordpress-client-uploads/adn/wp-content/uploads/2016/08/16220146/160809-Begich-Towers-1-1024x683.jpg'",
    
        "Alaska has 130 volcanoes, 50 of those have been active since around 1760. Together these volcanoes<br>" +
        "make up 75% of US volcanic eruptions in the past 200 years.",

        "The US purchased Alaska from Russia for $7.2 million in 1867. $7.2 million in 1876 is equivalent to about<br>" +
        "$125,500,000 in 2020.",
        
        "The produce in Alaska can grow <u>a lot</u>. Thanks to the summer sun, delivering sunlight for as<br>" +
        "much as 20 hours a day, your veggies could be as bg as you! Recently there has been a 138 pound cabbage,<br>" +
        "a 65 pound cantaloupe, and a 35 pound broccoli."]],

        //arizona
        ["Arizona", "AZ", "Grand Canyon State", 
        ["There are 685 deaths recorded that have occured at the Grand Canyon that have been from accidents and<br>" +
        "health related-issues.",
    
        "There aren't any fossils in the Grand Canyon because the rocks are older than the dinosaurs. The only<br>" +
        "fossils you might find are things like corals, sponges, and trilobites.",
    
        "Pluto was discovered in Flagstaff on February 18th, 1930, by Clide Tombaugh with an astrograph telescope<br>" +
        "at the Lowell Observatory.",
        
        "Arizona has the most species of rattlesnakes with 13 different species. The Mohave rattlesnake is the<br>" +
        "most toxic of all 13, but the Western Diamondback rattlesnake is responsible for more bites and deaths<br>" +
        "than any other type of rattlesnake.<br>" +
        "<img width=500 alt='western diamondback rattlesnake' src='https://www.wildrepublic.com/wp-content/uploads/2018/11/WesternDiamondback-3-3992-xl.jpg'",
    
        "Arizona is the only state aside from Hawaii that doesn't observe Daylight Savings time.",
        
        "When you think of Arizona you might think of the cacti. It can take a saguaro cactus 10 years<br>" +
        "to reach <i>one inch</i>. By 70 years they can be 6 and a half feet and begin making their own flowers,<br>" + 
        "and by 95-100 years they can be 15-16 feet tall and might start to make their first arms! This is why<br>" +
        "there a law against cutting them down. If you cut one down, even on your own property,<br>" +
        "you can get a hefty fine or even jail time.",
    
        "You can be in Colorado, Arizona, New Mexico, and Utah all at the same time. Arizona's northeast<br>" +
        "corner borders the three states and is the only place in the US where the corners of four states<br>" +
        "meet."]],

        //arkansas
        ["Arkansas", "AR", "Natural State", 
        ["Diamonds were first discovered in Arkansas, where Crater of Diamonds State Park stands now, by<br>" +
        "John W. Huddleston in 1906.",
        
        "On July 2nd, 1962 the first ever Walmart opened in Rogers, Arkansas.",
    
        "The largest diamonds ever found in the US were in Arkansas, including an 8.52-carat Esperanza gem<br>" +
        "discovered July of 2015. It has an estimated value of $1,000,000."]],

        //colorado
        ["Colorado", "CO", "Centennial State", 
        ["Colorado is the only state in hisotry to turn down the Olympics. Residents voted against hosting<br>" +
        "the 1976 Winter Olympics to avoid the cost, pollution, and populaton boom.",
    
        "You can be in Colorado, Arizona, New Mexico, and Utah all at the same time. Colorado's southwest<br>" +
        "corner borders the three states and is the only place in the US where the corners of four states<br>" +
        "meet.",
    
        "Leadville, Colorado is the highest town or city in the US, sitting at 10,512 feet! The founding<br>" +
        'suggested Leadville since there were so many towns with "silver" in the name.',
    
        "The Park Theater in Estes Park was Colorado's first place to see a movie. The Park Theater was built<br>" +
        "in 1913 and is the oldest theater in the state and one of th oldest in the world.",
    
        "Colorado is nicknamed the Centennial State because it became a state in 1876, 100 years after the signing<br>" +
        "of the Declaration of Independence."]],

        //california
        ["California", "CA", "Golden State", 
        ["In San Francisco, burying the dead has been illegal since 1901. Space was limited and real estate was<br>" +
        "high in demand, even back then, so the city outlawed burials and moved all cemeteries to a neighboring<br>" +
        "town, Colma, California. The dead in the town outnumber the living 1000 to 1.<br>" +
        "Don't go there during a zombie apocalypse.",
    
        "California has the biggest county, San Bernardino County, with 61.95 square miles."]],

        //connecticut
        ["Connecticut", "CT", "Constitution State", 
        ["A pickle can only legally be called a pickle if it bounces."]],

        //deleware
        ["Delaware", "DE", "First State", 
        ["Delaware is the second smallest state and has only 3 counties, less than every other state.",
        
        'Delaware is nicknamed "The First State" because it was the first of the 13 colonies. Because they are<br>' +
        'the first state, they\'re given the first position in congressional votes and national events such as<br>' +
        'Presidential Inaugurations.']],

        //florida
        ["Florida", "FL", "Sunshine State", 
        ["Florida is the only place in the world where alligators and crocodiles coexist."]],

        //georgia
        ["Georgia", "GA", "Peach State", 
        ["In Athens, Georgia there is a tree that owns itself and an 8 foot radius of land named the Jackson Oak.<br>" +
        "Professor William Jackson deeded both the tree and the land <i>to</i> the tree in the early 19th century.<br>" +
        "In 1942 the tree fell, but was replaced by a new tree grown from the original tree's acorns. This new tree is<br>" +
        "called, the son of the tree that owns itself.",
    
        "Georgia is known as the Peach State, but it's also the US's top producer for pecans, peanuts, and vidalia onions.<br>" +
        "The state's onions are thought to be some of the sweetest in the world.",
    
        "Funeral directors in Georgia can lose their licenses if they use obscense language in the company of a corpse.",
        
        "You can find live shrimp at the top of Stone Mountain, 1682 feet above sea level. Depressions in the stone gather<br>" +
        "rainwater that gives the shrimp a nice little habitat.",
    
        "Cumberland Island, Georgia is inhabited by wild horses."]],

        //hawaii
        ["Hawaii", "HI", "Aloha State", 
        ["There are only 12 letters in the Hawaiian alphabet.<br>" +
        "Vowels: A, E, I, O, U<br>" +
        "Consonants: H, K, L, M, N, P, W",
    
        "From east to west Hawaii is the widest state.",
    
        "Hawaii has its own time zone (HST/Hawaii Standard Time) and they don't<br>" +
        "observe daylight savings time.",
    
        "Kilauea Iki is the world's most active and largest volcano."]],

        //idaho
        ["Idaho", "ID", "Gem State", 
        ["Idaho is also known as The Potato State because the combination<br>" +
        "of their rich volcanic soil, water from melting snow in nearby mountains,<br>" +
        "clean air, sunny days, and cool nights produce high quality potatoes.",
    
        "Idaho is the only state with a seal designed by a woman.<br> Sarah Etine Edwards won " +
        "1890 contest with her design and<br> not only did she get the glory of being the one to design<br>" +
        "a state seal, she also won $100!<br>" +
        "(That would be $2836.43 in 2020)"]],

        //illinois
        ["Illinois", "IL", "Prarie State", 
        ["in 1865 Illinois was the first state to abolish slavery.",
    
        "In 1871 was the Great Chicago Fire. A fire that started in a barn located on the property of Patrick and Catherine O'Leary<br>" +
        "burned for 2 days, October 8th to the 10th. The fire killed 300 people, destroyed 3.3 square miles, and left over 100,000 people<br>" +
        "homeless.",
    
        "In Vandalia, Illinois there is a fire breathing dragon known as the Kaskaskia Dragon.<br>" +
        "<img alt='Kaskaskia Dragon in Illinois' src='https://www.roadsideamerica.com/attract/images/il/ILVANdragon_morgan.jpg'>",
    
        "Twinkies were invented on April 6th, 1930 in River Forest, Illinois.",
    
        "The world's tallest man, Robert Wadlow, was born in Alton, Illinois on<br>February 22nd,1918. He was 8 foot 11 inches, weighed 491 pounds,<br>" +
        "and had a size 37 shoe. He died at the age of 22.<br>" +
        "<img width=500px alt='Robert Wadlow' src='https://www.guinnessworldrecords.com/Images/Robert-Wadlow-Colourised-By-PMH_tcm25-511586.jpg'>"]],

        //indiana
        ["Indiana", "IN", "Crossroads of America", 
        ["Orville Redenbacher, Indiana produces more than 20% of the country's popcorn supply. Almost half of the state's cropland is used<br>" +
        "for corn. In 2014, more than 91,000 acres of corn were planted for popcorn."]],

        //iowa
        ["Iowa", "IA", "Hawkeye State", 
        ["It is illegal for a man with a mustache to kiss a woman in public.",
    
        "You cannot eat the largest strawberry in the world because it's made of fiberglass. It sits high in Strawberry Point, Iowa.<br>" + 
        "<img width=500 alt='the worlds largest strawberry' src='https://express-images.franklymedia.com/4294/sites/76/2019/09/16120126/IMG-08882.jpg'>",
    
        "There are more hogs in iowa than people. They outnumber people 4 to 1, with a population of 3 million.",
    
        "Iowa is the only state that has a name that begins with two vowels."]],

        //kentucky
        ["Kentucky", "KY", "Bluegrass State", 
        ["Kentucky was originally a county of Virigina, but as the citizens of the western part of the state started to get frustrated with their<br>" +
        "eastern neighbors, they petitioned for statehood and became the US's 15th state in 1792."]],

        //louisiana
        ["Louisiana", "LA", "Pelican State", 
        ["Louisiana is the only state to have parishes instead of counties.",
        
        "Biting someone with your natural teeth is considered a simple assault, but<br> bititng someone with your false teeth is considered aggrivated assault."]],

        //maine
        ["Maine", "ME", "Pine Tree State", 
        ["In Rumford, Maine it is against the law to bite your landlord.",
    
        "Maine has its own desert. 40 acres of desert called Desert of Maine, an expanse of silt and sand that came about due to over-farming but has since<br>" +
        "become a popular tourist attraction."]],

        //maryland
        ["Maryland", "MD", "Old Line State", 
        ["Maryland is the first state to designate a state exercise. On October 1, 2008 the state exercise of Maryland was declared to be <u>walking</u>.",
        
        "Convicted murderer, Harold Benjamin Dean, became the first and old person to escape from Maryland supermax penitentiary in 2002.",
    
        "The state drink is milk.",
    
        "Jousting is the state sport and Lacrosse is the state <i>team</i> sport.",
    
        "Maryland has an official state crustacean, the Maryland Blue Crab.<br>" +
        "<img alt='Chesapeake blue crab' src='https://www.southernmarylandchronicle.com/wp-content/uploads/2018/01/blue-crab.jpg'>"]],

        //massachusetts
        ["Massachusetts", "MA", "Bay State", 
        ["On January 15th, 1919 was the Great Molasses Flood, also known as the Boston<br> " + 
        "Molassacre. A large storage tank filled with 2.3 million gallons of mollasses<br> " + 
        "burst and rushed through the streets at about 35 mph, killing 21 people and<br> " +
        "injuring 150. Many residents claimed that the area still smelled of molasses on<br> " +
        "hot summer days.",
    
        "It is against the law in Massachusetts to lounge on shelves in a bakery.<br>" + 
        "Will you be arrested and sent to jail for it? I'd guess not but, be careful<br>" +
        "anyways.",
    
        "In 1872 there was a devastating fire that went on for 12 hours in Boston. It began 7pm November 9<br>" +
        "and ended 7am November 10th. It was one of the most destructive fires in American hisotry.<br>" +
        "It's referred to as the Great Boston Fire of 1872.",
    
        "It is illegal to kill or frighten a pigeon in their home."]],

        //michigan
        ["Michigan", "MI", "Great Lake State", 
        ["Michigan was the first state to abolish the death penalty for all crimes except treason.",
    
        "You can get 10 cents back for every can you recycle, which is the highest payback rate in the country.<br>" +
        "While that's awesome, they're losing over $10 million a year due to people from other states fraudulently<br>" +
        "cash in.",
    
        "Built in 1838, the Saugatuck Chain is the last hand-cranked chain ferry in the US.",
    
        "The largest working windvane in the US is in Montague, Michigan. Built in 1984 by Whitehall Metal Studios of Montague<br>" +
        "the windvane is 48 feet tall with an arrow 26 feet long. On top of the arrow is the Ella Ellenwood.<br>" +
        "<img width=500 alt='worlds largest weather vane' src='https://live.staticflickr.com/6044/6327752356_76d934fe0a_b.jpg'>"]],

        //minnesota
        ["Minnesota", "MN", "North Star State", 
        ["Minnesota has the largest ball of twine <u>built by one person</u>.",
    
        "The St. Lawrence River flows in three directions. North to the Hudson Bay in Canada, South to the Gulf of Mexico, and<br>" +
        "East towards the Atlantic Ocean."]],

        //mississippi
        ["Mississippi", "MS", "Magnolia State", 
        ["Mississippi has more churches per person than any other state. The state also has the most people attending church<br>" + 
        "than any other state with 63% of residents saying they attend weekly or almost every week."]],

        //montana
        ["Montana", "MT", "Treasure State", 
        ["Montana is the largest landlocked state in the US."]],

        //nebraska
        ["Nebraska", "NE", "Cornhusker State", 
        ["Nebraska is home to the world's largest hand-planted forest in Halsey National Forest near<Br>" +
        "Thedford, that covers over 90,000 acres.",

        'In Blue Hill, Nebraska, no woman wearing a "hat that would scare a timid person" can be seen eating onions in public, it\'s<br>' +
        'against the law.']],

        //nevada
        ["Nevada", "NV", "Silver State", 
        ['California is known as the Golden State, but most U.S. gold comes from Nevada.',
    
        'Only 18 states have an official state grass. Nevada and Utah share the same one - Indiana ricegrass, a popular food among<br>' +
        'bison, jackrabbits, and people on gluten-free diets!',
    
        'In Spanish, "nevada" means "snow-capped". If you say the state\'s name with the spanish pronunciation, Nev AH da, you most<br>' +
        'don\'t live there. Locals pronounce it Nev AD a.',
    
        'Nevada is the driest state in the U.S. with less than 10 inches of rain per year.',
    
        'Reno is farther west than Los Angeles!']],

        //new hampshire
        ["New Hampshire", "NH", "Granite State", 
        ['In 1833 the first free public library in the U.S. was established in Peterborough,<br> and it still stands today!',
    
        'New Hampshire\'s state flower is the purple lilac! <br>' +
        '<img src="https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_11437.jpg?itok=BBlDDg1N" alt="purple lilacs" width="400px" >',
    
        'New Hampshire is nicknamed the Granite State because it has a history of granite mining.',
    
        'New Hampshire\'s state motto is "Live Free or Die". The motto comes from a statement written by the Revolutionary General John Stark,<br>'+
        'hero of the Battle of Bennington.',
    
        'New Castle is the smallest town in New Hampshire. It covers .8 square miles, or 512 acres.']],

        //new jersey
        ["New Jersey", "NJ", "Garden State", 
        ["New Jersey was the first state to abolish the death penalty for all crimes.",
    
        'New Jersey has the most diners in the world and is often referred to as the "Diner Capital of the World".',
    
        'The street names in Monopoly board games are named after the actual streets in Atlantic City.',
    
        'New Jersey\'s state bug is the honey bee!<br>' +
        '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuZhtgUHTKWc9mBaZC4r5UphVlf7vhcxUYelB2o_hoOkQFapO&usqp=CAU" alt="honey bee" width="400px">',
    
        'New Jersey was the very first state to sign the Bill of Rights.',
    
        'New Jersey has a spoon museum that has over 5,400 spoons. It can be found at Lambert Castle.',
    
        'The official dinosaur of New Jersey is the hadrosaurus! <br>' +
        '<img src="https://vignette.wikia.nocookie.net/cooldinofacts/images/e/eb/Hadrosaurus.jpg/revision/latest/scale-to-width-down/400?cb=20111205142107" alt="hadrosaurus" width="400px">',
    
        'New Jersey is one of two states that don\'t let you pump your own gas.<br>'+
        'The other being Oregon.']],

        //new mexico
        ["New Mexico", "NM", "Land of Enchantment", 
        ["You can be in Colorado, Arizona, New Mexico, and Utah all at the same time. New Mexico's northwest<br>" +
        "corner borders the three states and is the only place in the US where the corners of four states<br>" +
        "meet.",
    
        'You can see five different states from the top of Capulin Volcano.',
    
        'Before 2010, "idiots" were not allowed to vote in New Mexico. Before, "idiots" were people with mental illness,<br>' +
        'or people who were considered insane.',
    
        '<br>New Mexico has more cows than people.<br>' +
        '<img src="https://s3-wp-lyleprintingandp.netdna-ssl.com/wp-content/uploads/2018/01/09060054/cow-354428_1280.jpg" alt="cow" width="400px">']],

        //new york
        ["New York", "NY", "Empire State", 
        ['It is illegal to honk your car horn in a non emergency. You can get up to a $350 fine for <i>any</i> unnecessary<br>'+
        'car noises. This includes a car alarm.',
    
        'New Yorkers bite 10 times more people than sharks do worldwide each year.',
    
        'There are more women than men in New York City.',
    
        'The Empire State building gets hit by lightning about 23 times per year.',
    
        'New York City is the largest city in the United States.',
    
        'There is a birth in New York City every 4.4 minutes.']],
        
        //north carolina
        ["North Carolina", "NC", "Tar Heel State", 
        ['Fayetteville, North Carolina is home to the first miniature golf course.',
    
        'The Venus Fly Trap is only found in two American states, North Carolina and South Carolina.<br>'+
        'It\'s native to Hampstead, North Carolina.',
    
        'North Carolina is the largest producer of sweet potatoes in the nation.',
    
        'The state\'s motto is "Esse quam videri", which means "To be, rather than to seem".',
    
        'US presidents James K. Polk, Andrew Jackson, and Andrew Johnson were all from Noth Carolina.',
    
        'North Carolina became the 12th state to join the Union on November 21, 1789, and as of<br>' +
        'May 20, 1861, it became the 10th state to secede from it.',
    
        'North Carolina produces between 15 and 20 percent of the nation\'s real Christmas trees.']],

        //north dakota
        ["North Dakota", "ND", "Peace Garden State", 
        ['North Dakota is the least visited state in America.',
    
        'Lewis and Clark spent more time in North Dakota than in any other place they visited on<br>' +
        'their expedition.',
    
        'On February 17, 2007, 8,962 people made snow angels at the state capital grounds, beating the<br>'+
        'world record for the most snow angels made simultaneously in one place. The previous record was<br>'+
        '3,784 snow angels at Michigan Technological University the previous year.',
    
        'Less than 1% of North Dakota is forest, which is the smallest amount of any state.',
    
        'There is a sport in North Dakota for racing lawn mowers! Mowers get customized enough that<br>'+
        'they can reach speeds of 60 mph, compared to the 5pm they would usually do in your backyard.',
    
        'North Dakota produces more honey than any other state.',
    
        'There is a highway sculpture named "Geese in Flight" that holds the Guinness World Record<br>'+
        'for the largest metal sculpture in the world. Made in 2001, it\'s 156 feet long, 100 feet<br>'+ 
        'tall, and weights 75 tons.<br>'+
        '<img src="https://img.geocaching.com/waymarking/display/7e42ebd5-6583-4dd9-af85-768310800452.jpg" alt="Geese in Flight" width="400px">']],

        //ohio
        ["Ohio", "OH", "Buckeye State", 
        ['7 of our 45 presidents have been from Ohio.<br>'+
            'Ulysses S. Grant<br>'+
            'Rutherford B. Hayes<br>'+
            'James A. Garfield<br>'+
            'Benjamin Harrison<br>'+
            'William McKinley<br>'+
            'William Howard Taft<br>'+
            'Warren G. Harding<br>',
        
        'In honor of William McKinley, the official state flower is the red carnation. He liked<br>'+
        'to keep a red carnation in his lapel, and then minutes before he was shot in 1901, he gave<br>'+
        'a red carnation to a little girl.<br>'+
        '<img src="https://cdn11.bigcommerce.com/s-j5bw4sasgt/images/stencil/1280x1280/products/1158/2899/_22A2309%20copy__74640.1553806390.jpg?c=2&imbypass=on" alt="red carnation" width="400px">',
    
        'The candy Life Savers were made by Ohio candymaker Clarence Crane. He was watching<br>'+
        'a pill-making machine quickly pop out pellets and realized he could make mints the same<br>'+
        'way! The machine had a defect that punched a hole in the middle of the round, but he took<br>'+
        'advantage of it!',
    
        'Lake Erie was mentioned in an early version of the Dr. Suess book "The Lorax",<br> '+
        '<i>"They\'ll walk on their fins and get woefully weary in search of some water that<br>'+
        'isn\'t so smeary. I hear things are just as bad up in Lake Erie."</i> Conditions<br>' + 
        'in the lake had improved by the 1980s, so employees at Ohio Sea Grant asked<br>'+
        'Dr. Suess to change his prose on that page and he complied.',
    
        'Newark, Ohio might be the only place in the world where one can work in a basket.<br>'+
        '<img width="400px" src="https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555914913/shape/mentalfloss/basket.jpg" alt="big basket building">',
    
        'The world\'s largest cuckoo clock is in Sugarcreek, it\'s fully functional and known as<br>'+
        'the "Little Switzerland of Ohio".',
    
        'The Cuyahoga River has caught on fire at least 13 times but most famously on June 22, 1969.<br>'+
        'The water was heavily polluted and some bits of oil slicked debris caught fire by sparks<br>'+
        'caused by a passing train. It caused $100,000 worth of damage to two railroad bridges.<br>'+
        'Congress was inspired to clean up the pollution and established the Environmental Protection<br>'+
        'Agency (EPA).<br>'+
        '<img src="https://cen.acs.org/content/dam/cen/97/24/WEB/09724-cover-fire1cxd.jpg" alt="Cuyahoga River" width="400px">']],

        //oregon
        ["Oregon", "OR", "Beaver State", 
        ['Portland, Oregon has more breweries than any other city in the world. The city has<br>'+
        'over 60 breweries.',
    
        'Crater Lake is the deepest in the US and was formed more than 6500 years ago within the remains<br>'+
        'of an ancient volcano.',
    
        'Eugene, Oregon was the first city to have one-way streets.',
    
        'Oregon has the most ghost towns in the US with over 200 ghost towns. One of them is named<br>'+
        'Idiotville.',
    
        'Oregon has an official state nut, the hazelnut!<br>'+
        '<img src="https://fitnessmedia.azureedge.net/media/3861/hazelnuts-blog.jpg" alt="hazelnuts" width="400px">',
    
        'Oregon is one of two states that don\'t allow you to pump your own gas. The other state<br>'+
        'is New Jersey.',
    
        'Springfield, Oregon is the real life inspiration for the Simpson\'s hometown.',
    
        'The world\'s tallest barber shop pole is in Forest Grove, Oregon. The pole is 40 feet tall<br>'+
        'and was inspired by the pole in San Antonio, Texas. Chuck Olsen, the man who built the 40<br>'+
        'foot tall pole, said "I thought if treeless Texas could put up the world\'s tallest barber<br>'+
        'pole, we out here should be able to do better than that."<br>'+
        '<img src="https://media-cdn.tripadvisor.com/media/photo-p/0d/64/45/e5/there-it-is.jpg" alt="worlds tallest barber shop pole" width="400px">',
    
        'The Oregon State flag is the only flag in the US with a different design on each side.<br>'+
        '<img src="https://flagloft.com/wp-content/uploads/2015/04/OREGON-416x244.jpg" alt="oregon flag" width="400px">']],

        //pennsylvania
        ["Pennsylvania", "PA", "Keystone State", 
        ['The founder of the Pennsylvania Colony, William Penn, died in 1718 but didn\'t become a<br>'+
        'US citizen until 1984. In honor of their contributions to American history, Penn and his<br>'+
        'wife Hannah were granted honorary citizenship in the 1980s.',
    
        'The official state dog is the Great Dane.<br>'+
        '<img src="https://cdn.orvis.com/images/DBS_GreatDane_1280.jpg" alt="great dane" width="400px">',
    
        'A coal mine in Centralia, Pennsylvania has been on fire since 1962. According to the state\'s<br>'+
        'Department of Environmental Protection, the fire could burn for another century if left<br>'+
        'uncontrolled. The town once had over 1,000 residents but as of 2020 it has 11.',
    
        'The word "Pennsylvania" is misspelled on the Liberty Bell. The bell was made before the<br>'+
        'founders had agreed on the official spelling.<br>'+
        '<img src="https://pbs.twimg.com/media/DiZJaAqWAAEAWIe.jpg" alt="liberty bell" width="400px">',
    
        'A keystone is a piece of stone at the center of an arch, that helps keep all the other<br>'+
        'stones in place. Pennsylvania was nicknamed the Keystone State because of its central<br>'+
        'role in colonial history.<br>'+
        '<img src="https://www.legalgenealogist.com/wordpress/wp-content/uploads/2018/05/Keystone.jpg" alt="keystone" width="400px">',
    
        'Pennsylvania\'s official state animal is the white-tailed deer.<br>'+
        '<img src="https://arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/O4OWKF2KTRCRLGZZAS7ZXVTMVM.JPG" alt="white tailed deer" width="400px">',
    
        'Pennsylvania is the only one of the original 13 colonies that is not bordered by the<br>'+
        'Atlantic Ocean.',
    
        'The famous Groundhog\'s Day groundhog, Punxsutawney Phil, makes his home in<br>'+
        'Punxsutawney, Pennsylvania. Every year around Groundhog\'s day, the town has a two-day<br>'+
        'celebration with art shows, music, and more.']],

        //rhode island
        ["Rhode Island", "RI", "Ocean State", 
        ["Rhode island is the smallest state in the us with 1212 square miles.",
    
        "This state was the last of the original 13 colonies to become a state."]],

        //south carolina
        ["South Carolina", "SC", "Palmetto State", 
        ['South Carolina is the only U.S. state that grows tea.',
    
        'South Carolina\'s official state flower is the Yellow Jessamine. The flower has poisoned<br>'+
        'children who have mistaken the flower for honeysuckle, and the nectar can kill honey bees.<br>'+
        '<img src="https://www.sciway.net/i/sc-state-flower-yellow-jessamine.jpg" alt="yellow jessamine" width="400px">',
    
        'The official state dance is the Shag.',

        'On average about 11 tornadoes touch down in South Carolina each year since 1950.',
    
        'South Carolina doesn\'t have any professional sports teams.']],

        //south dakota
        ["South Dakota", "SD", "Mouth Rushmore State", 
        ['Belle Fourche, South Dakota is 20 miles south of the geographical<br>'+
        'center of the United States.',
    
        'Mount Rushmore took 14 years and $1,000,000 to build.',
    
        'One of the largest and most complete skeletal remains of a T-Rex on Earth was<br>'+
        'excavated near Faith, SD.',
    
        'The prairie rattlesnake is the only venomous snake native to South Dakota.<br>'+
        '<img src="https://loe.org/content/2014-01-10/20-Prairie-Rattlesnake----I-see-you;-I-see-your-heat;-I-taste-your-scent...jpg" alt="prairie rattlesnake" width="400px">',
    
        'Huron, South Dakota is home to the world\'s largest pheasant.<br>'+
        '<img src="https://www.roadsideamerica.com/attract/images/sd/SDHURpheasant_clower_620x300.jpg" alt="world\'s largest pheasant" width="400px">']],

        //tennessee
        ["Tennessee", "TN", "Volunteer State", 
        ['Tennessee ties Missouri for the most neighboring states, each with 8 border states.',
    
        'Tennessee is the home of Mountain Dew. In the 1940s Barney and Ally Hartman developed the soft drink as a<br>'+
        'soda to mix with whiskey.',
    
        'Kingston, Tennessee was the state capital for only one day, September 21, 1807',
    
        'Tennessee got it\'s nickname for its participation in the Battle of New Orleans during the war of 1812.']],

        //texas
        ["Texas", "TX", "Lone Star State", 
        ["Texas is one of three states that produce helium, the other two<br>" +
        "being Kansas and Oklahoma."]],

        //utah
        ["Utah", "UT", "Beehive State", 
        ["You can be in Colorado, Arizona, New Mexico, and Utah all at the same time. Utah's southeast<br>" +
        "corner borders the three states and is the only place in the US where the corners of four states<br>" +
        "meet."]],

        //vermont
        ["Vermont", "VT", "Green Mountain State", []],

        //virginia
        ["Virginia", "VA", "Old Dominion", []],

        //west virginia
        ["West Virginia", "WV", "Mountain State", []],

        //wisconsin
        ["Wisconsin", "WI", "Badger State", 
        ["Wisconsin has the <u>heaviest</u> ball of twine."]],

        //wyoming
        ["Wyoming", "WY", "Equality State", []]];

    let stateChecker = [];

    let colors = ["#ffbdc7", "#ffbdd6", "#ffbdf7", "#f0abff", "#c994ff", "#a494ff",
        "#94abff", "#94caff", "#94f1ff", "#b3ffed", "#b5ffd4", "#94ffa0", "#c1ffb5",
        "#daffb5", "#f4ffb5", "#fff3b5", "#ffd8b5", "#ffc4b5"]

    let currentFact = []
    let currentState = []

    let currentSearch = []

    randomButton.addEventListener("click", function() {
        let index = Math.round(Math.random()*49);
        let factIndex = Math.round(Math.random()*(factsArray[index][3].length-1));
        let colorIndex = Math.round(Math.random()*(colors.length-1));        

        currentFact.unshift(factIndex)
        currentState.unshift(index)

        if(currentFact[1] === factIndex && currentState[1] === index) {
            let newIndex = Math.round(Math.random()*49);
            let newFact = Math.round(Math.random()*(factsArray[newIndex][3].length-1));

            fact.innerHTML = `
            <div>
                <table style="margin: auto; background-color: ${colors[colorIndex]}; border-radius: 8px; border-style: dashed;">
                    <tr>
                        <th>
                            <h2 style="font-size: 60px; line-height: 0px; font-weight: bold;"><a href='../states/${factsArray[newIndex][0]}.html'>${factsArray[newIndex][0]}</a> - ${factsArray[newIndex][1]}</h2>
                            <p style="font-size: 25px;"> The ${factsArray[newINdex][2]} </p> 
                            <p style="line-height: 25px; padding: 5px;"> ${factsArray[newIndex][3][newFact]} </p>       
                        </th>
                    </tr>
                </table>
            </div>
            `

        } else {

            fact.innerHTML = `
            <div>
                <table style="margin: auto; background-color: ${colors[colorIndex]}; border-radius: 8px; border-style: dashed;">
                    <tr>
                        <th>
                            <h2 style="font-size: 60px; line-height: 0px; font-weight: bold;"><a href='../states/${factsArray[index][0]}.html'>${factsArray[index][0]}</a> - ${factsArray[index][1]}</h2>
                            <p style="font-size: 25px;"> The ${factsArray[index][2]} </p> 
                            <p style="line-height: 25px; padding: 5px;"> ${factsArray[index][3][factIndex]} </p>       
                        </th>
                    </tr>
                </table>
            </div>
            `
        }

        error.innerHTML = `
            <div></div>
            `
    })

    searchButton.addEventListener("click", function() {

        let search = searchText.value
        let searchLower = search.toLowerCase();
        
        for(i = 0; i < factsArray.length; i++) {
            let factIndex = Math.round(Math.random()*(factsArray[i][3].length-1)); 
            currentSearch.unshift(factIndex)     

            if(factsArray[i][0].toLowerCase() === searchLower || factsArray[i][1].toLowerCase() === searchLower) {
                let colorIndex = Math.round(Math.random()*(colors.length-1));

                if(currentSearch[1]===factIndex) {
                    let newFact = Math.round(Math.random()*(factsArray[i][3].length-1));

                    fact.innerHTML = `
                    <div>
                        <table style="margin: auto; background-color: ${colors[colorIndex]}; border-radius: 8px; border-style: dashed;">
                            <tr>
                                <th>
                                    <h2 style="font-size: 60px; line-height: 0px;"><a href='../states/${factsArray[i][0]}.html'>${factsArray[i][0]}</a> - ${factsArray[i][1]}</h2>
                                    <p style="font-size: 25px; line-height: 15px;"> The ${factsArray[i][2]} </p> 
                                    <p style="line-height: 22px; padding: 5px;"> ${factsArray[i][3][newFact]} <br></p>
                                    <p style="font-size: 12px;"><br><u>If you press search again, you can get a new fact for the same state!</u></p>       
                                </th>
                            </tr>
                        </table>
                    </div>
                    `

                } else {
                    fact.innerHTML = `
                    <div>
                        <table style="margin: auto; background-color: ${colors[colorIndex]}; border-radius: 8px; border-style: dashed;">
                            <tr>
                                <th>
                                    <h2 style="font-size: 60px; line-height: 0px;"><a href='../states/${factsArray[i][0]}.html'>${factsArray[i][0]}</a> - ${factsArray[i][1]}</h2>
                                    <p style="font-size: 25px; line-height: 15px;"> The ${factsArray[i][2]} </p> 
                                    <p style="line-height: 22px; padding: 5px;"> ${factsArray[i][3][factIndex]} <br></p>
                                    <p style="font-size: 12px;"><br><u>If you press search again, you can get a new fact for the same state!</u></p>       
                                </th>
                            </tr>
                        </table>
                    </div>
                    `

                }
                
            } else if(search === ""){
                fact.innerHTML = `
                <div>
                    <p style="font-size: 25px; text-align: center;">I can't find a state if one isn't entered :(</p>
                </div>    
                `
            }

            //creates an array of all 50 states in lowercase form
            stateChecker.push(factsArray[i][0].toLowerCase());
            stateChecker.push(factsArray[i][1].toLowerCase())

            //checks if the user's search is in the array
            if(!stateChecker.includes(searchLower)) {
                error.innerHTML = `
                <div>
                    <p>Sorry I don't have any fun facts for <u>${search}</u></p>
                </div>
                `
            } else {
                error.innerHTML = `
                <div></div>
                `
            }
        }
        event.preventDefault()
    })
}

window.onload = init;
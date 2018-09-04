let firstRocket;
let secondRocket;
let thirdRocket;

let rockets;
let rocketNames;

function createRockets() {

    let firstRocketName = $('#firstRocketName').val();
    let firstRocketFuel = $('#firstRocketFuel').val();

    let secondRocketName = $('#secondRocketName').val();
    let secondRocketFuel = $('#secondRocketFuel').val();

    let thirdRocketName = $('#thirdRocketName').val();
    let thirdRocketFuel = $('#thirdRocketFuel').val();

    validateInput(firstRocketName, firstRocketFuel, secondRocketName, secondRocketFuel, thirdRocketName, thirdRocketFuel);

    firstRocket = new Rocket(firstRocketName, firstRocketFuel);
    secondRocket = new Rocket(secondRocketName, secondRocketFuel);
    thirdRocket = new Rocket(thirdRocketName, thirdRocketFuel);

    rockets = [firstRocket, secondRocket, thirdRocket];
    rocketNames = [firstRocket.name, secondRocket.name, thirdRocket.name];

    $('#inputRockets').fadeOut(500);
    $('#submitButton').fadeOut(500);
    $('#launchButton').fadeIn(500);

}

function validateInput(firstRocketName, firstRocketFuel, seconRocketName, secondRocketFuel, thirdRocketName, thirdRocketFuel) {
    if (firstRocketName === '' || firstRocketFuel === '' || seconRocketName === '' || secondRocketFuel === '' || thirdRocketName === '' || thirdRocketFuel === '') {
        alert('All fields must be filled!')
    }

}

async function launch() {

    $('#launchButton').fadeOut(1000);
    $('#landingButtons').fadeIn(500).on('click', function (event) {
        $(event.target).attr('disabled', 'disabled');
    });

    Promise.all([
        firstRocket.takeOff(),
        secondRocket.takeOff(),
        thirdRocket.takeOff()
    ]).then(() => {

        $('#landingButtons').fadeOut(1000);

        let landed = landedRockets();
        let crashed = rocketNames;
        $('#result').html(`Landed rockets: ${landed.length === 0 ? "none" : landed.join(', ')}` + ' landed successfully!' + '<br/> ' + '<br/> ' +
            `Crashed rockets: ${crashed.length === 0 ? "none" : crashed.join(', ')}` + ' out of fuel!').fadeIn(2000);
    })
}

function land(name) {
    for (let rocket of rockets) {
        if (rocket.name === name) {
            rocket.landRocket();
        }
    }
}

function landedRockets() {

    let landed = [];

    for (let rocket of rockets) {

        if (rocket.land === true) {

            landed.push(rocket.name);
            let rocketToRemoveIndex = rocketNames.indexOf(rocket.name);
            rocketNames.splice(rocketToRemoveIndex, 1);
        }
    }

    return landed;
}


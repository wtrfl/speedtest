var speed = 0;
var multiplier = 10, ticksPassed = 0;
var stay = 20;

function changeSpeed() {
    var rand = Math.floor(Math.random() * 50), increase;

    if (rand <= 10) {
        increase = (Math.random() + 0.5) * -1;
    } else if (rand > 10 && rand < stay) {
        increase = 0;
    } else if (rand >= stay) {
        increase = (Math.random() + 0.5) * multiplier;
    } else {
        increse = 0;
    }

    speed += increase;
    

    if (ticksPassed > 75) {
        var numToSub = (ticksPassed - 75) + 10;
        stay -= numToSub;
    }

}

function changeMult() {
    var numToSub = 10 - (10 - (ticksPassed / 1000));
    multiplier -= numToSub;
}

setInterval(function(){
    if(ticksPassed <= 125) {
        changeSpeed();
        changeMult();
        document.getElementById('speed').innerHTML = speed.toFixed(1) + " Mbps";
    } else if (ticksPassed > 145) {
        document.getElementById('status').innerHTML = "your internet speed is:";
    }   

    ticksPassed++;
}, 50);


function temp() {
    switch(rand) {
        case 0:
            increase = Math.random() + 0.5;
            break;
        case 1:
            increase = 0;
            break;
        case 2:
            increase = (Math.random() + 0.5) * -1;
            break;
    }
}



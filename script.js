$(document).ready(onReady);

//console.log('link JQ test')

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let playerAP = 100
let fungusAmongUs = 100

// do not set yet - makes the dang function start immediately.
let regenID

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    // render initial AP & HP
    renderAPHP();
    // handle click on scepter
    $( '.arcane-sceptre' ).on(' click', ()=>attack('sceptre') );
    $( '.entangle' ).on(' click', ()=>attack('entangle') );
    $( '.dragon-blade' ).on(' click', ()=>attack('dragon') );
    $( '.star-fire' ).on(' click', ()=>attack('star') );
    // handle click on entangle
    // handle click on dragon blade
    // handle click on star fire
}

function attack(attack) {
    // console.log(`You're attacking with: `, attack);
    
    
    // use scepter!
    if (attack === 'sceptre') {
        // console.log(`You're attacking with: `, attack);
        // reduce AP
        playerAP += -12;
        console.log('player ap is', playerAP);
        // reduce HP
        fungusAmongUs += -14;
        console.log('fungus hp is', fungusAmongUs);
        renderAPHP();
    }
    if (attack === 'entangle') {
        // console.log(`You're attacking with: `, attack);
        playerAP += -23;
        console.log('player ap is', playerAP);
        fungusAmongUs += -9;
        console.log('fungus hp is', fungusAmongUs);
        renderAPHP();
    }
    if (attack === 'dragon') {
        // console.log(`You're attacking with: `, attack);
        playerAP += -38;
        console.log('player ap is', playerAP);
        fungusAmongUs += -47;
        console.log('fungus hp is', fungusAmongUs);
        renderAPHP();
    }
    if (attack === 'star') {
        // console.log(`You're attacking with: `, attack);
        playerAP += -33;
        console.log('player ap is', playerAP);
        fungusAmongUs += -25;
        console.log('fungus hp is', fungusAmongUs);
        renderAPHP();
    } 
    // reset fungus hp regen so it doesn't double up.
    clearInterval(regenID)
}

function renderAPHP() {
    console.log('rendering AP/HP');

    // replace AP value
    let APOnDOM = $('#ap-text-id');
    console.log('render: player AP as', playerAP)
    console.log('render: fungus HP as:', fungusAmongUs)
    APOnDOM.empty();
    APOnDOM.append( playerAP, ' AP' );

    // render AP bar
    $('#ap-meter').val(playerAP);
    
    // check AP Value for 0/negative
    if ( playerAP < 1 && fungusAmongUs > 0 ) {
        console.log('Yer outta AP!');
        playerAP = 0;
        // fungus jumping time. Disable attack buttons.
        $('.freaky-fungus').removeClass('walk')
        $('.freaky-fungus').addClass('jump')
        $('.attack-btn').prop('disabled', true)
        // replace AP value with 0
        APOnDOM.empty();
        APOnDOM.append( playerAP, ' AP' );
    }
    
    
    // replace HP value
    let HPOnDOM = $('#hp-text-id');
    HPOnDOM.empty();
    HPOnDOM.append( fungusAmongUs, ' HP' );

    // render HP Bar
    $('#hp-meter').val(fungusAmongUs);
    // check HP value for 0/negative
    
    
    if ( fungusAmongUs < 1 && playerAP > 0) {
        console.log('Fungus is down!')
        fungusAmongUs = 0; 
        // fungus dying time. Disable attack buttons.
        $('.freaky-fungus').removeClass('walk')
        $('.freaky-fungus').addClass('dead');
        $('.attack-btn').prop('disabled', true)
        // replace HP value with 0
        HPOnDOM.empty();
        HPOnDOM.append( fungusAmongUs, ' HP' );
    }
    
    // Hey Dale, is that mushroom getting bigger?
    // create variable
    // 
    //let regenID = setInterval(fungoidGrowth, 1000);
    
    //deploy variable.
    if (fungusAmongUs < 51) {
        regenID = setInterval(fungoidGrowth, 1000);
    }

    if (fungusAmongUs < 1 && playerAP < 1 ) {
        clearInterval(regenID)

        fungusAmongUs = 0; 
        playerAP = 0;
        
        APOnDOM.empty();
        APOnDOM.append( playerAP, ' AP' );

        HPOnDOM.empty();
        HPOnDOM.append( fungusAmongUs, ' HP' );
        
        $('.freaky-fungus').removeClass('walk')
        $('.freaky-fungus').addClass('dead');
        $('.attack-btn').prop('disabled', true)

        alert("You've won, but at what cost!?");
    }
    
}

function fungoidGrowth() {
    console.log('the fungus is getting bigger!!')
    fungusAmongUs += 1;
    let HPOnDOM = $('#hp-text-id');
    HPOnDOM.empty();
    HPOnDOM.append( fungusAmongUs, ' HP' );
}

// HP Regeneration
// Scientist have recently revealed that fungi are tougher under harsh conditions.
// If the Freaky Fungus' HP falls below 50, have it regenerate 1 HP every second.
// HINT: Look up the built in setInterval() function!
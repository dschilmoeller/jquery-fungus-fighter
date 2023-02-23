$(document).ready(onReady);

//console.log('link JQ test')

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let playerAP = 100
let fungusAmongUs = 100


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
}

// function to kill fungus
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM


function renderAPHP() {
    console.log('rendering AP/HP');
    // replace AP value
    let APOnDOM = $('#ap-text-id');
    console.log('render: player AP as', playerAP)
    console.log('render: fungus HP as:', fungusAmongUs)
    APOnDOM.empty();
    APOnDOM.append( playerAP, ' AP' );
    // check AP Value
    if ( playerAP < 1 ) {
        console.log('Yer outta AP!');
        playerAP = 0; // this doesn't seem to be working. 
        $(.)
    }
    // replace HP value
    let HPOnDOM = $('#hp-text-id');
    HPOnDOM.empty();
    HPOnDOM.append( fungusAmongUs, ' HP' );

    // check HP value
    if ( fungusAmongUs < 1 ) {
        console.log('Fungus is down!')
        fungusAmongUs = 0; // this doesn't seem to be working.
        // change walk class to dead class
        $('.freaky-fungus').addClass('dead')
    }
}

// Arcane Scepter
// AP Cost: 12 / HP Damage: 14
// Entangle
// AP Cost: 23 / HP Damage: 9
// Dragon Blade
// AP Cost: 38 / HP Damage: 47
// Star Fire
// AP Cost: 33 / HP Damage: 25
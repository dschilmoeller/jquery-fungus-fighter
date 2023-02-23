$(document).ready(onReady);
console.log('link JQ test')
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

function attack(attack) {
    // console.log(`You're attacking with: `, attack);
    // use scepter!
    if (attack === 'sceptre') {
        // console.log(`You're attacking with: `, attack);
    }
    if (attack === 'entangle') {
        // console.log(`You're attacking with: `, attack);
    }
    if (attack === 'dragon') {
        // console.log(`You're attacking with: `, attack);
    }
    if (attack === 'star') {
        // console.log(`You're attacking with: `, attack);
    }
}
// function to use scepter
    // check sufficient ap
    // reduce AP
    // reduce HP
    // check fungus status -> kill if dead
    // check AP status ->
        // if negative change to 0
        // fungus jump if 0


// function to use entangle

// function to use dragon blade

// function to use star fire

// function to kill fungus
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
// Arcane Scepter
// AP Cost: 12 / HP Damage: 14
// Entangle
// AP Cost: 23 / HP Damage: 9
// Dragon Blade
// AP Cost: 38 / HP Damage: 47
// Star Fire
// AP Cost: 33 / HP Damage: 25

function renderAPHP() {
    console.log('rendering AP/HP');
    // replace AP value
    let APOnDOM = $('#ap-text-id');
    APOnDOM.empty();
    APOnDOM.append( 100, ' AP' );
    // replace HP value
    let HPOnDOM = $('#ap-text-id');
    HPOnDOM.empty();
    HPOnDOM.append( 100, ' AP' );
}
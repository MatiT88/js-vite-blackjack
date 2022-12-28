import _ from 'underscore';
import {crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHtml } from './usecases'
// import { crearDeck as crearNuevoDeck}  from'./usecases/crear-deck.js';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */


export let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0;


// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');




deck = crearDeck( tipos, especiales );


// Esta función me permite tomar una carta
// const pedirCarta = () => {

//     if ( deck.length === 0 ) {
//         throw 'No hay cartas en el deck';
//     }
//     const carta = deck.pop();
//     return carta;
// }

// pedirCarta();
// const valorCarta = ( carta ) => {

//     const valor = carta.substring(0, carta.length - 1);
//     return ( isNaN( valor ) ) ? 
//             ( valor === 'A' ) ? 11 : 10
//             : valor * 1;
// }





// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHtml( carta );
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck( tipos, especiales );

    puntosJugador     = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});


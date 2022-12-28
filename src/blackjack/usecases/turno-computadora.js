import { crearCartaHtml } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * Ejecuta la partida de la PC
 * @param { Number } puntosMinimos Son los puntos minimos que necesita la pc para ganar
 * @param { Array<String> } deck Son las cartas que quedan en el deck despues del turno del usuario
 * @param { HTMLElement } puntosHTML Elemnto html para mostrar los puntos
 */

export const turnoComputadora = ( puntosMinimos, deck, puntosHTML, divCartasComputadora ) => {

    let puntosComputadora = 0;

    if( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if( !deck ) throw new Error('El deck es necesario');
    if( !deck ) throw new Error('El deck es necesario');

   
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHtml( carta )
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
/**
 * Esta funcion selecciona una carta del deck
 * @param {Array<String>} deck Es un arreglo de Strings
 * @returns {String} Retorna la ultima carta del deck
 */


// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {

    if( !deck ||  deck.length === 0 ) throw new Error('No hay cartas en el deck');
    
    const carta = deck.pop();
    return carta;
}
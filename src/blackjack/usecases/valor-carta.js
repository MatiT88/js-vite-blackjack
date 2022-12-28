
/**
 * Obtiene el valor numerico de la carta selecionada
 * @param {String} carta Este parametro recibe la carta seleccionada por el jugador
 * @returns {Number} Retorna un number con el valor de la carta seleccionada 
 */

export const valorCarta = ( carta ) => {

    if( !carta ) throw new Error('Es obligatorio que haya una carta y que sea una carta valida')
    if(carta.length <= 1 ) throw new Error('La carta no es valida')
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    var translation = str;

    // si la palabra termina en ar, se le quitan esos dos caracteres
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2); //Slice permie cortar caracteres
    }
    //Si la palabra comienza con z se debe agregar al final pe
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe'; // += a lo que ya tenia agregele pe 
    }
    //Si la palabra tiene mas de 10 caracteres poner un guion en el medio
    if (translation.length >= 10) {
        var firstHalf = translation.slice(0, Math.round(translation.length / 2));
        var secondHalf = translation.slice(Math.round(translation.length / 2));

        translation = firstHalf + '-' + secondHalf;
    }
    //Si es un palindromo se anulan las demas condiciones y se devuelve en minusculas y mayusculas
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    }; //lo vuelvo arreglo luego lo convierto al revez y lo vuelvo strig
    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;

        for (var i = 0; i < length; i++) {
            var char = str.charAt(i); //Toma el valor del string en la posicion deseada
            translation += capitalize ? char.toUpperCase() : char.toLowerCase(); // condicion en una linea
            capitalize = !capitalize;
        }
        return translation;
    }

    if (str == reverse(str)) {
        return minMay(str);
    }

    return translation;
}
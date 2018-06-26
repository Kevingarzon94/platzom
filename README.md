# Platzom
 Idioma inventado para el curso fundamentos de javascript en Platzi

## Descripcion del Idioma

    -si la palabra termina en ar, se le quitan esos dos caracteres
    -Si la palabra comienza con z se debe agregar al final pe
    -Si la palabra tiene mas de 10 caracteres poner un guion en el medio
    -Si es un palindromo se anulan las demas condiciones y se devuelve en minusculas y mayusculas

## Instalaciòn

npm install platzom
    
## Uso
Import platzom from 'platzom'

console.log(platzom('programar')); //program
console.log(platzom('zorro')); //zorrope
console.log(platzom('zarpar')); //zorppe
console.log(platzom('abecedario')); //zorppe
console.log(platzom('sometemos'))

## Créditos

- Kevin Garzon

##Licencia

MIT

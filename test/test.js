const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){

    it('si la palabra termina en ar, se le quitan esos dos caracteres', function(){
        const translation = platzom("Programar")
        expect(translation).to.equal=("Program")
    })
    it('Si la palabra comienza con z se debe agregar al final pe', function(){
        const translation2 = platzom("Zorro")
        expect(translation2).to.equal=("Zorrope")        
    })
    it('Si la palabra tiene mas de 10 caracteres poner un guion en el medio', function(){
        const translation3 = platzom("abcdefghij")
        expect(translation3).to.equal=("abcde-fghij")
    })
    it('Si es un palindromo se anulan las demas condiciones y se devuelve en minusculas y mayusc', function(){
        const translation4 = platzom("sometemos")
        expect(translation4).to.equal=("SoMeTeMoS")
    })           
})
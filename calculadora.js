//Requerimos las funciones de los modulos exportados

const sumar = require('./funciones/sumar')
const restar = require('./funciones/restar')
const multiplicar = require('./funciones/multiplicar')
const dividir = require('./funciones/dividir')

//Ejecutamos un par de operaciones
// mostrando el resultado por consola

console.log(sumar(14, 6)) // -> 24

console.log(restar(310, 20)) // -> 290

console.log(multiplicar(4,3)) // -> 16
console.log(multiplicar(10, 0)) // -> 0

console.log(dividir(10,2)) // -> 5
console.log(dividir(20, 0)) // ->0






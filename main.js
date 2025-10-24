//Ejercicio 1
/* Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas 
y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".*/
let palabra = prompt();
//let palabra = "Peru";


function dividirPa(palabra){
    let guardar = palabra.toString().split('');
    let mayus = guardar.map(function(pa){
        return pa.toLocaleUpperCase()
    });
    let Separado = mayus.join(" ")
    return Separado
};
console.log(dividirPa(palabra));


//Ejercicio 2
/*Declara una función que acepte un nombre como parámetro y 
devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.*/
let frase = prompt();
//let frase = "Hola que tal"

function contarFra(frase){
    let guardar = frase.toString().split(" ");
    let contar = guardar.length
    return contar
};
console.log(contarFra(frase));

//Ejercicio 3
/*Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.*/
let frase2 = prompt();
let letraFra = prompt();
//let frase2 = "prueba prueba aguacate"
//let letraFra = "a"
function queLetra(frase2, letraFra){
    let almacen = [];
    let guardar = frase2.toString().split('');
    for(let i = 0; i < guardar.length; ++i){
        if(guardar[i] == letraFra){
            almacen.push(guardar[i])
        }
    }
    let result = almacen.length;
    return result;
};
console.log(queLetra(frase2,letraFra));
/* PsudoCodigo
    Inicio
        leer frase2
        Leer letraFra
        Ejecuta queLetra
        pilla variable frase2
        pilla variable letraFra
        crea almacen
        separa frase en array
        lee guardar
        mientras i sea menor que la cantidad de datos de guardar
            si guardar posicion i es igual a letraFra
                almacena guardar posicion i en almacen
        lee almacen
        cuanta los datos dentro de almacen
        envia los datos de almacen
    Final
*/
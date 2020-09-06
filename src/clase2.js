//Funciones estáticas
function saludar(nombre = "Sin nombre") {
    return "Hola, " + nombre + " ¿cómo estás?"
}

let saludo = saludar("Naqq");

console.log(saludo)

function presionarUnBoton(coordenadas) {
    if(typeof coordenadas === "number"){
        console.log(`Se ha presionado el botón ${coordenadas}`)
    }
    else{
        throw `Explotó un botón porque bla bla bla`
    }
}

//Condicionales

let edad = -20;



function comprobarEdad(edad) {

    if(typeof edad !== "number"){
        throw "Eso no es una edad"
    }
    else if(edad >= 18 && edad <= 65){
        return "Puede adquirir su licencia de conducir"
    }
    else if(edad < 18 && edad > 0){
        return "Sos muy joven para conducir"
    }
    else if(edad > 65){
        return "Sos demasiado grande para conducir"
    }
    else{
        throw "Hay algo raro con tu edad"
    }
}

try {
    let puedeConducir = comprobarEdad(edad)
    console.log(puedeConducir)
} 
catch (error) {
    console.log("Hay un error : " + error)
}

//Bucles
//forEach
function promediar(...numeros) {
    //Variable interna
    let total = 0;
    //ForEach
    numeros.forEach(function (numero){
        total += numero
    })
    total /= numeros.length
    let totalRedondeado = total.toFixed(2)
    console.log(total)
    console.log(totalRedondeado)

}

promediar(2, 4, 5, 7, 2, 3, 8)
/*
For estándar o completo
3 partes (se delimitan con ";")
1 -> contador, se inicia una variable en un número
2 -> condición, si se cumple, entonces se vuelve a ejecutar lo que hay dentro las llaves
3 -> de a cuánto avanza el contador
*/

let numerosAlAzar = [2, 4, 5, 7, 2, 3, 8]

function sumarConForCompleto(numeros) {
    let total = 0;

    for (let contador = 0; contador < numeros.length; contador++) {

        total += numeros[contador]
    
    }

    console.log(total)

}


//For of

function sumarConForSimple(numeros) {
    let total = 0;

    for (let numero of numeros) {
        total += numero    
    }

    console.log(total)
}

sumarConForCompleto(numerosAlAzar)
sumarConForSimple(numerosAlAzar)

//bucle While o do while



function generarNumeroAleatorio() {
    return (Math.random() * 100).toFixed(2)
}

console.log(generarNumeroAleatorio())

do {
    console.log("Molestar gente")
} 
while (generarNumeroAleatorio() < 90);

while(generarNumeroAleatorio() < 90){
    console.log("Molestar gente")
}


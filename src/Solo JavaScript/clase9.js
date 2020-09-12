//Funciones flechas

//Función clásica
function nombre(parámetro) {
    return "algo"
}
//Función flecha con nombre
const nombre2 = (parámetro) => {
    return "algo"
}
//Función anónima con flecha
(parámetro) => { return "algo" }
//Función anónima comprimida con flecha
parámetro => `Hace algo con el ${parámetro}`




//Promesas
function contarHasta3() {
    return new Promise(resolve => {
        setTimeout(() => { 
            console.log("Ya conté hasta 3");
            resolve()
        }, 3000)
    })
}

function verSiLlueve(llueve) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log("Fui a ver si llovía")

            if(llueve) resolve("Sí, está lloviendo");
            else resolve("No, no estaba lloviendo");            

        }, 2000)
    })
}

//Funcional

contarHasta3()
.then(() => verSiLlueve(false))
.then(r => console.log(r))
.catch(e => console.log(e))


//POO <- Programación orientada a objetos


try {


    (async () => {
    
        await contarHasta3()

        let resultado = await verSiLlueve(true)

        console.log(resultado)

    })()

} 
catch (error) {
    console.log(error)
}

// Otra manera de hacer lo de arriba
async function main() {

    await contarHasta3()

    let resultado = await verSiLlueve(true)

    console.log(resultado)
}


try {
    main()    
} 
catch (error) {
    console.log(error)
}




//Pipelines
function uno() {
    return "algo"
}

function dos(texto) {
    return texto += " más"
}
function tres(texto) {
    return texto += " más otro algo."
}

console.log(tres(dos(uno())))
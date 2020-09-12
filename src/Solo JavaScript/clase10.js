class Molestron {


    static textoAMinusculas(texto) {

        return new Promise((resolve, reject) => {
            if (typeof texto === "string") {
                resolve(texto.toLowerCase())
            }
            else {
                reject("El valor pasado como parámetro no es un String")
            }
        })

    }


    static reemplazarVocales(letraDeReemplazo, texto) {

        return new Promise((resolve, reject) => {
            if (typeof texto === "string") {
                let resultado = texto
                    .replace(/a/g, letraDeReemplazo)
                    .replace(/e/g, letraDeReemplazo)
                    .replace(/i/g, letraDeReemplazo)
                    .replace(/o/g, letraDeReemplazo)
                    .replace(/u/g, letraDeReemplazo)

                resolve(resultado)

            }
            else {
                reject("El valor pasado como parámetro no es un String")
            }
        })

    }


    static alternarMinusMayus(texto) {

        return new Promise((resolve, reject) => {

            if (typeof texto === "string") {
                //Se separa el texto en un arreglo letra por letra
                let arregloDelTexto = texto.split("");

                //Creamos la variable para guardar el resultado final
                let resultado = "";

                //Iterar letra por letra, para alternar entre mayus y minus
                for (let index = 0; index < arregloDelTexto.length; index++) {

                    //Verificamos que sea la letra par    
                    if (index % 2 === 0) {
                        resultado += arregloDelTexto[index].toLowerCase()
                    }//Si es impar
                    else {
                        resultado += arregloDelTexto[index].toUpperCase()
                    }

                }
                //Una vez termina el bucle, devolvemos el resultado
                resolve(resultado)
            }
            else {
                reject("El valor pasado como parámetro no es un String")
            }

        })

    }


    static primeraLetraEnMayus(texto) {

        return new Promise((resolve, reject) => {

            if (typeof texto === "string") {

                let primerLetra = texto.charAt(0)
                let restoDelTexto = texto.slice(1)
                let resultado = primerLetra + restoDelTexto;

                resolve(resultado)
            }
            else {
                reject("El valor pasado como parámetro no es un String")
            }
        })

    }



}

let oracion = "Había una vez un barco chiquito, fin."

async function main() {

    let textoEnMinuscula = await Molestron.textoAMinusculas(oracion)

    let textoEnMinita = await Molestron.reemplazarVocales("i", textoEnMinuscula)

    let feminaziPromedio = await Molestron.alternarMinusMayus(textoEnMinita)

    console.log(feminaziPromedio);

}

try {
    main()
} 
catch (error) {
    console.log(error)
}

Molestron.textoAMinusculas(oracion)
    .then(resultado => Molestron.textoAMinusculas(resultado))
    .then(resultado => Molestron.reemplazarVocales("i", resultado))
    .then(resultado => Molestron.alternarMinusMayus(resultado))
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

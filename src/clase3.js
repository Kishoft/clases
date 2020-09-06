//Objetos, su nombre viene de la lógica de la vida real
//Objeto, es una cosa, que tiene propiedades, y funciones dentro de sí mismo
//Ej: un automovil, tiene propiedades como color de pintura, patente, marca, modelo, etc..
//y tiene funciones (metodos) como la de encender su motor, doblar las ruedas, etc ..

//Clases -> una plantilla para "construir" un objeto
//Constructor es una función que si existe, de forma mandatoria se ejecuta al crear el objeto
//El constructor toma parámetros para construir el objeto

class Vehiculo {

    marca = "Ford"
    dominio
    color

    constructor(modelo, dominio, color){
        this.modelo = modelo;
        this.dominio = dominio;
        this.color = color;
    }

    sonarLaBocina(){
        console.log(`El vehículo ${this.marca}, tocó la bocina.`)
    }
}


//Instanciar la clase
//Al instanciar la clase, estamos creando un objeto a partir de una clase

let autoDeEze = new Vehiculo("ABC123", "Naranja")
let autoDeNaq = new Vehiculo("ABC124", "Blanco")

autoDeEze.sonarLaBocina()
autoDeNaq.sonarLaBocina()

/*
let autoDeNaq2 = 
{
    marca : "Ford",
    modelo : "Fiesta",
    dominio : "ABC124",
    color : "Blanco",
    sonarLaBocina(){
        console.log(`El vehículo ${this.marca} ${this.modelo}, tocó la bocina.`)
    }
}
autoDeNaq2.sonarLaBocina()
*/



class Personaje{
    nombre
    nivel = 1;
    hp = 200;
    recurso;
    daño = 15;

    get estado(){
        if(this.hp > 100){
            return "Saludable"
        }
        else if(this.hp <= 100){
            return "Débil"
        }
    }

    set recibirDaño(cantidad){
        this.hp -= cantidad
        if(cantidad > this.hp){
            this.hp = 0
            console.log(`${this.nombre} ha muerto`)
        }
        console.log(`${this.nombre} ahora tiene ${this.hp}`)
    }

    set recibirSanación(cantidad){
        this.hp += cantidad
        if(this.hp > 500){
            this.hp = 500
        }
    }

    constructor(nombre, recurso){
        this.nombre = nombre
        this.recurso = recurso
    }

    hablar(mensaje){
        console.log(`${this.nombre} dice: ${mensaje}`)
    }

    atacar(objetivo){
        objetivo.recibirDaño = this.daño
        console.log(`${this.nombre} ataca a ${objetivo.nombre} y le inflije ${this.daño} de veneno`)
    }
}

/*
let swarow = new Personaje("Swarow", "Ki");
let naq = new Personaje("Naq sempai", "Mana");

swarow.hablar("Hola putes, ah re bolude");

naq.atacar(swarow)
naq.atacar(swarow)
naq.atacar(swarow)
naq.atacar(swarow)
naq.atacar(swarow)
naq.atacar(swarow)

console.log(swarow)
console.log(naq)

console.log(swarow.estado)

*/


//Herencia
//Capacidad de un objeto de extender sus propiedades y funciones, siendo cada vez más específico a un uso
//ó siendo cada vez más completo
//Polimorfismo la capacidad de mutar o cambiar o agregar algo a un método o propiedad existente

class Paladin extends Personaje {
    constructor(nombre){
        super(nombre, "Poder sagrado")
    }
    curar(objetivo){
        objetivo.recibirSanación = 20;
    }
}

class Pícaro extends Personaje{
    dañoAdicional = 10;
    constructor(nombre){
        super(nombre, "Energía")
    }
    atacar(objetivo){
        super.atacar(objetivo)
        objetivo.recibirDaño = this.dañoAdicional
        console.log(`Y le inflije ${this.dañoAdicional} de daño adicional a ${objetivo.nombre}.`)
    }
}

let frutadin = new Paladin("Naq");
let picarón = new Pícaro("Eze");

console.log(picarón.hp)
frutadin.curar(picarón)
console.log(picarón.hp)
picarón.atacar(frutadin)

//Clases estáticas (métodos y propiedades estáticas)
//NO SE INSTANCIAN, se pueden utilizar directamente, en cualquier momento, sin tener que crear un objeto

class Contabilidad{
    static IVA = 0.21;

    static calcularIVA(base){
        return base * this.IVA
    }
}

let IVA = 0.21;

function calcularIVA(base) {
    return base * IVA
}

console.log(calcularIVA(120))
console.log(Contabilidad.calcularIVA(120))

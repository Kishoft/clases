class Lavarropas {

    etapaDeLavado = 1;


    tostarElPan() {
        console.log("Se está tostando el pan")
    }
    lavado() {
        console.log("Se está lavando")
    }
    centrifugado() {
        console.log("Se está centrigurando")
    }
    enjuague() {
        console.log("Se está enjuagando")
    }
}

let lavarropas = new Lavarropas()

//Es como un if, pero sin poder hacer comparaciones, ya que recibe un valor, y si coincide
//Con los casos (case), hará algo, y si no se le expresa que debe salir de
//la ejecución (con break), entonces seguirá ejecutando en sucesión las funciones

//Break, se puede utilizar en bucles o condicionales para "romper" el flujo de ejecución
switch (lavarropas.etapaDeLavado) {
    case 0:
        lavarropas.tostarElPan();
    case 1:
        lavarropas.lavado();
    case 2:
        lavarropas.enjuague();
        break;
    case 3:
        lavarropas.centrifugado();
        break;
    default:
        break;
}

let numeros = [1, 3, 5, 7, 8, 9, 11, 13, 15]

let n;

for (n of numeros) {
    if (n % 2 === 0) {
        console.log(`${n} es un número par, entonces la cagaste`)
        break;
    }
    else {
        console.log(`El número ${n} es impar, muy bien`)
    }
}
//Continue NO interrumpe el flujo de ejecución, en su lugar se saltea la iteración
for (n of numeros) {
    if (n % 2 === 0) {
        continue;
        console.log(`${n} es un número par, entonces la cagaste`)
    }
    else {
        console.log(`El número ${n} es impar, muy bien`)
    }
}

function* counter(value) {
    let step;

    while (true) {
        step = yield ++value;

        if (step) {
            value += step;
        }
    }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value);   // 1
console.log(generatorFunc.next().value);   // 2
console.log(generatorFunc.next().value);   // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value);   // 15
console.log(generatorFunc.next(10).value); // 26


//Funciones generadoras

function* countAppleSales() {
    let saleList = [3, 7, 5]
    for (let i = 0; i < saleList.length; i++) {
        yield saleList[i]
    }
}
//La misma pero con sintaxis de clase
class Manzanas {
    static *countAppleSales(){
        let saleList = [3, 7, 5]
        for (let i = 0; i < saleList.length; i++) {
            yield saleList[i]
        }
    }
}

let generador = countAppleSales();

console.log(generador.next())
setTimeout(() => console.log(generador.next()), 2000)
setTimeout(() => console.log(generador.next()), 4000)

//Variables estáticas
var variableUno = "Valor de \"texto\"" //Cadena de texto
let variabledos = 1234 //Números 
//Constantes
const constanteUno = true //Booleanos
/*
Valores primitivos

Booleanos (bool) -> true o false
Cadenas de texto (string) -> Siempre comienzan con " ", ' ' o ` `
Números (number)
*/

//----------------------------------------------------
/*
Valores complejos

Arreglo o colección (Array) -> Contienen datos, y un índice implícito
Set (Set) -> No tiene elementos repetidos y se parecen a los Array

Objetos (Object) -> Contienen datos tipo clave-valor, la clave solo puede ser un String, son únicos
Mapas (Map) -> Contienen datos tipo clave-valor. La clave puede ser cualquier cosa, pueden ser repetidos
*/

let array = ["Naq", 11, true, "Otro texto", false]

let set = new Set([1, 3, 2, 3, 2, 1 ])

let object = {
    "nombre" : "Pablo",
    "apellido" : "Acosta",
    "edad" : 28,
    "alimentacion" : ["Pizza", "Puré", "Milanesas"],
    "vive" : true
}

let map = new Map()

map.set(1, "Naq")
map.set(2, "Eze")
map.set(3, "Pinchilón")
map.set("Navidad", false)


setTimeout(() => console.log("Tarea 1"), 4000)
setTimeout(() => console.log("Tarea 2"), 3000)
setTimeout(() => console.log("Tarea 3"), 5000)
setTimeout(() => console.log("Tarea 4"), 2000)


//Callback, es un parámetro que se llama como función, 
//es decir se le agrega "()" al final para llamarlo

function pasarTodoAMayus(texto) {

    let resultado = texto.toUpperCase()

    console.log(resultado)

    return resultado

}

function eliminarEspacios(texto, callback) {
    
    let resultado = texto.trim()

    console.log(resultado)

    callback(resultado)

}

function pasarAString(texto, callback) {
    
    let resultado = texto.toString()

    console.log(resultado)

    callback(resultado)

}

pasarAString('asdasdasd', function(script) {

    eliminarEspacios(function(script) {
  
      pasarTodoAMayus(function(script) {
        // ...continue after all scripts are loaded
      });
  
    })
  
  });
  
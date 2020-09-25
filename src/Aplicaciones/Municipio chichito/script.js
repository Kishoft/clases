let edadInput = document.getElementById('edad');
let btnVerificar = document.getElementById('verificar');
let formManejo = document.getElementById('formManejo');
let requisitosAdicionales = document.getElementById('requisitosAdicionales')

function verificarEdadParaConducir(){
    let edad = edadInput.value

    

    if (edad < 18) {
        alert('No tienes la edad suficiente para hacer el trámite')
    }
    else if (edad >= 18 && edad < 65) {
        alert('Tienes los requisitos necesarios para conducir')
    }
    else if (edad >= 65) {
        alert('Sos demasiado viejo')
    }
}

formManejo['discapacidad'][0].addEventListener('click', e => {
    requisitosAdicionales.style.display = "block";
})
formManejo['discapacidad'][1].addEventListener('click', e => {
    requisitosAdicionales.style.display = "none";
})

console.log(formManejo['discapacidad'])


formManejo.addEventListener('submit', event => {

    event.preventDefault();
    
    verificarEdadParaConducir();

})

let trampa = document.getElementById('trampa');

trampa.addEventListener('click', e => {
    window.location = "https://www.taringa.net/"
})

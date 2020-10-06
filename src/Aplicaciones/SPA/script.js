let btnInicio = document.getElementById('btnInicio');
let btnAbout = document.getElementById('btnAbout');
let appContainer = document.getElementById('app')


function cambiarPagina(componente){
    appContainer.innerHTML = `<${componente}></${componente}>`
}

btnInicio.onclick = () => cambiarPagina("inicio-page")
btnAbout.onclick = () => cambiarPagina("about-page")


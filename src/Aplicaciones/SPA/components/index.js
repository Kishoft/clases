class Inicio extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode : 'open' });
        this.shadowRoot.innerHTML = `<h1>Esta es la página de inicio</h1>`
    }
    connectedCallback(){
        console.log("Mostrando index")
    }
    disconnectedCallback(){
        console.log("El componente se eliminó de la web")
    }
}

window.customElements.define('inicio-page', Inicio)
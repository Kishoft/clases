class About extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode : 'open' });
        this.shadowRoot.innerHTML = `<h1>Acerca de nosotros ah re</h1>`
    }
    connectedCallback(){
        console.log("Mostrando about")
    }
    disconnectedCallback(){
        console.log("El componente se eliminó de la web")
    }
}

window.customElements.define('about-page', About)
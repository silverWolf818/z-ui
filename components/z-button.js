export default class ZButton extends HTMLElement {
    static get observedAttributes() {
        return ["disabled", "href"];
    }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.innerHTML = `
        <style>
            :host {
                position:relative;
                display: inline-block;
                font-size: 14px;
                white-space: nowrap;
                cursor: pointer;
                padding: .5em 1em;
                line-height: 1.42875;
                border-radius: .25em;
                overflow:hidden; 
                color: var(--fontColor, #333);  
                border:1px solid var(--borderColor, #d9d9d9); 
                transition:all .3s;
            }
            :host(:hover) {
                opacity: 0.85;
                color: var(--themeColor, #1890ff);
                border-color: var(--themeColor, #1890ff);
            }
            :host([type="primary"]){
                color: #fff;
                background: var(--themeColor, #1890ff);
                border-color: var(--themeColor, #1890ff);
            }
            :host([type="primary"]:hover) {
                opacity: 0.85;
                color: #fff;
            }
            .btn {
                background: none;
                outline: 0;
                border: 0;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                padding: 0;
                user-select: none;
                cursor: unset;
            }
            .btn::after{
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                pointer-events: none;
                background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
                background-repeat: no-repeat;
                background-position: 50%;
                transform: scale(10,10);
                opacity: 0;
                transition: transform .5s, opacity 1s;
            }
             .btn:active:after {
                transform: scale(0,0);
                opacity: .2;
                transition: 0s;
            }
        </style>
        <button class="btn"></button><slot></slot>   
        `;
    }


}

if (!customElements.get('z-button')) {
    customElements.define('z-button', ZButton);
}
// Alternative way to define component
customElements.define(
	'my-component',
	class extends HTMLElement {
		constructor() {
			super(); // always call super() first in the constructor.

			// Attach a shadow root.
			const shadowRoot = this.attachShadow({ mode: 'open' });
			// open means accessible from outside, although closed can be accessed with advanced JS.

			shadowRoot.innerHTML = ` 
                    <style>
                        div {
                            margin: 20px;
                            border: 4px solid orange;
                            padding:20px;
                            border-radius: 10px;
                            font-size: 1.5rem;
                            width:300px;
                            color: green;
                        }
                    </style>
                    <div>This is the SHADOW DOM</div>
                    <slot></slot>
                `;
		}
		connectedCallback() {
			// this as an event when the component is attached to the DOM
			// Shadow DOM can acces elements in Light DOM but not the other way around
			const lightDiv = document.getElementById('light');
			const lightContent = lightDiv.textContent;
			console.log('%cMYCOMPONENT - SRC', 'color:blue;font-size:18px');
		}
	},
);

alert('hello from src');

import * as Utils from './utils.js';

export class Selection {
    #wrapper;
    #outerBox;
    #arrow;
    #optionsListElement;
    #selectedOption;

    constructor(id, parent, searchable=false) {
        // Creates basic select components
        this.#wrapper = document.createElement('div');
        this.#outerBox = document.createElement('div');
        this.#outerBox.innerText += id;
        this.#arrow = document.createElement('div');
        this.#optionsListElement = document.createElement('ul');

        // Sets ids and classes
        this.#wrapper.id = id;
        this.#outerBox.id = `${this.#wrapper.id}.outerBox`;
        this.#arrow.id = `${this.#wrapper.id}.arrow`;
        this.#optionsListElement.id = `${this.#wrapper.id}.optionsList`;
        this.#wrapper.classList.add('custom-select-wrapper');
        this.#outerBox.classList.add('custom-select-outer-box');
        this.#arrow.classList.add('custom-select-arrow');
        this.#optionsListElement.classList.add('custom-select-options');
        
        // Appends children
        parent.appendChild(this.#wrapper);
        this.#wrapper.appendChild(this.#outerBox);
        this.#wrapper.appendChild(this.#arrow);
        this.#wrapper.appendChild(this.#optionsListElement);
        
        // Options show on click
        this.#outerBox.addEventListener('click', () => {
            Utils.toggleStyle(this.#arrow, 'transform', 'rotate(90deg)');
            this.#outerBox.classList.toggle('custom-select-thick');
            this.#optionsListElement.classList.toggle('custom-select-show');
        });
        this.#arrow.addEventListener('click', e => {
            Utils.toggleStyle(this.#arrow, 'transform', 'rotate(90deg)');
            this.#outerBox.classList.toggle('custom-select-thick');
            this.#optionsListElement.classList.toggle('custom-select-show');
            e.stopPropagation();
        });

        // Makes it that select closes when clicking s/t else
        window.onclick = e => {
            if (e.target !== this.#outerBox) {
                this.#outerBox.classList.remove('custom-select-thick');
                this.#optionsListElement.classList.remove('custom-select-show');
                this.#arrow.style.transform = '';
            }
        };

        this.value = this.#outerBox.innerText;
        this.#selectedOption = this.value;
        this.options = [];
    }

    addOptions(array) {
        this.options.push(...array);
        for (let i = 0; i < array.length; i++) {
            // Basic option setup
            const optionElement = document.createElement('li');

            const optionElementsArray = [];
            optionElementsArray.push(optionElement);

            optionElement.innerText = array[i];
            optionElement.classList.add('custom-select-option');
            this.#optionsListElement.appendChild(optionElement);
            
            this.resetVaulue();
            this.#selectedOption = this.value;
            Utils.getElementByInnerText(this.#optionsListElement, this.#selectedOption).classList.add('custom-select-option-selected');

            // Makes functinallity to clicking options
            optionElement.addEventListener('click', () => {
                this.#selectedOption = this.value;
                this.setValue(optionElement.innerText);
                this.toggleShow();
                Utils.getElementByInnerText(this.#optionsListElement, this.#selectedOption).classList.remove('custom-select-option-selected');
                optionElement.classList.add('custom-select-option-selected');
            });
        }

        this.resetVaulue();
        this.value = this.#outerBox.innerText;
        this.#selectedOption = this.value;
    }

    setValue(name) {
        this.#outerBox.innerText = name;
        this.value = this.#outerBox.innerText;
    }

    resetVaulue() {
        this.#outerBox.innerText = this.#optionsListElement.children[0].innerText;
        this.value = this.#outerBox.innerText;
    }

}
class Div {
    constructor(id, parent=document.body) {
        this.element = document.createElement('div');
        this.element.id = id;
        parent.appendChild(this.element);
    }

    style(obj={}) {
        this.element.style.background = obj.background;
        this.element.style.backgroundColor = obj.backgroundColor;
        this.element.style.backgroundImage = obj.backgroundImage;
        this.element.style.color = obj.color;
        this.element.style.fontFamily = obj.fontFamily;
        this.element.style.fontSize = obj.fontSize;
        this.element.style.height = obj.height;
        this.element.style.width = obj.width;
        this.element.style.border = obj.border;
        this.element.style.borderRadius = obj.borderRadius;
        this.element.style.position = obj.position;
        this.element.style.top = obj.top;
        this.element.style.right = obj.right;
        this.element.style.bottom = obj.bottom;
        this.element.style.left = obj.left;
        this.element.style.margin = obj.margin;
        this.element.style.padding = obj.padding;
        this.element.style.display = obj.display;
        this.element.style.visibility = obj.visibility;
    }

}

module.exports = { Div };
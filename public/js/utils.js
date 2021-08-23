export function toggleStyle(el, styleName, value) {
    if (el.style[styleName] !== value)
        el.style[styleName] = value;
    else
        el.style[styleName] = '';
}

export function getElementByInnerText(el, text) {
    let finalProduct;
    [...el.children].forEach(element => {
        if (element.innerText === text)
           finalProduct = element;
    });
    return finalProduct;
}
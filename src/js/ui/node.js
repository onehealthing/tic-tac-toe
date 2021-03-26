export default class Node {

    constructor() {
        this._node = {};
    }

    make() {
        this._node = document.createElement('div');
    }

    set(pattern) {
        this._node = document.querySelector(pattern);
    }

    setText(text) {
        this._node.innerText = text;
    }

    addClass(str) {
        this._node.classList.add(str);
    }

    removeClass(str) {
        this._node.classList.remove(str);
    }

    append(child) {
        this._node.append(child);
    }

    watch(cb) {
        this._node.addEventListener('click', () => cb());
    }

    get() {
        return this._node;
    }

    hasText() {
        return !!this._node.innerText;
    }

}
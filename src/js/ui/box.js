import Node from './node';

export default class Box extends Node {

    constructor(coords) {
        super();

        this._coords = coords;

        this.make();
        this.addClass('col');
    }

    getCoords() {
        return this._coords;
    }

    hasMark() {
        return this.hasText();
    }

    mark(marker) {
        this.setText(marker);
    }

}
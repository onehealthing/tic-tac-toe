import Node from './node';
import Info from './info';

const { floor, random } = Math;

export default class Player extends Node {

    constructor(name, marker) {
        super();

        this._id = 0;
        this._name = name;
        this._marker = marker;

        this.make();
        this.addClass('info-title');
        this.setText(`${name} (${marker})`);
        this.generateId();
        this.toUI();
    }

    getName() {
        return this._name;
    }

    getMarker() {
        return this._marker;
    }

    getId() {
        return this._id;
    }

    toUI() {
        new Info(this.get());
    }

    generateId() {
        this._id = floor(random() * 10) + 1;
    }

    mark() {
        this.addClass('active');
    }

    unmark() {
        this.removeClass('active');
    }


}
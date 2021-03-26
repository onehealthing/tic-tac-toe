import Node from './node';

export default class Row extends Node {

    constructor() {
        super();

        this.make();
        this.addClass('row');
    }

}
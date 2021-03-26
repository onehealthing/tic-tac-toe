import Node from './node';

export default class Info extends Node {

    constructor(node) {
        super();

        this.set('.info-container');
        this.append(node);
    }


}
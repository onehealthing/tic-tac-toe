import Node from './node';
import Row from './row';
import Box from './box';

export default class Board extends Node {

    constructor(size) {
        super();

        this._size = size;
        this._boxes = [];

        this.set('.board');
        this.build();
    }

    build() {
        for (let i = 0; i < this._size; i++) {

            const row = new Row();

            for (let j = 0; j < this._size; j++) {

                const box = new Box({ i, j });

                row.append(box.get());

                this.pushToBoxes(box);

            }

            this.append(row.get());

        }

    }

    pushToBoxes(box) {
        this._boxes.push(box);
    }

    getBoxes() {
        return this._boxes;
    }

}
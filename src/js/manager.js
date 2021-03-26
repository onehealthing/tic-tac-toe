import Board from './ui/board';
import Player from './ui/player';

const { floor, random } = Math;

export default class Manager {

    constructor() {
        this._currPlayer = {};
        this._players = [];
        this._movements = [];
        this._board = new Board(3);
    }

    makePlayer(name, marker) {
        this._players.push(new Player(name, marker));
    }

    watchMovements() {
        for (const box of this._board.getBoxes()) {
            box.watch(() => {
                if (box.hasMark()) {
                    return;
                }

                this.makeMove(box);
                this.prepareNextMove();

                if (!this.isMovementsExists()) {
                    this.completeGame();
                }
            });
        }
    }

    makeMove(box) {
        const marker = this._currPlayer.getMarker();

        box.mark(marker);
        this.pushToMovements(box.getCoords(), marker);
    }

    pushToMovements(coords, marker) {
        this._movements.push({ coords, marker });
    }

    prepareNextMove() {
        this._currPlayer.unmark();

        const currIdx = this._players.map(p => p.getId()).indexOf(this._currPlayer.getId());
        const nextIdx = currIdx >= (this._players.length - 1) ? 0 : currIdx + 1;

        this.setCurrPlayer(nextIdx);
    }

    generateFirsMove() {
        this.setCurrPlayer(floor(random() * this._players.length));
    }

    setCurrPlayer(idx) {
        this._currPlayer = this._players[idx];
        this._currPlayer.mark();
    }

    isMovementsExists() {
        return this._movements.length != this._board.getBoxes().length;
    }

    completeGame() {
        window.location.reload();
    }

}
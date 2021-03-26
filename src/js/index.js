import '../scss/app.scss';
import Manager from './manager';

const manager = new Manager();
manager.makePlayer('player1', 'x');
manager.makePlayer('player2', 'o');
manager.generateFirsMove();
manager.watchMovements();
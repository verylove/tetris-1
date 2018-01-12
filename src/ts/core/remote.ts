import Game from '../ui/game';

export default class Remote {

    private _game: Game;

    constructor() {
        this._game = new Game('remote');
        this._game.init();
    }

    get game() {
        return this._game;
    }
}
import { games } from '../data/data';


export const getGamesByConsole = (console = '') => {
    return games.filter(game => game.console === console);
}
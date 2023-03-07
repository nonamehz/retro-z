import { games } from '../data/data';


export const getGameBySlug = (slug = '') => {
    return games.filter(game => game.slug === slug);
}
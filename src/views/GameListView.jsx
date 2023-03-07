import { useParams } from 'react-router-dom';
import { Aside, GameGrid } from '../components';
import { getGamesByConsole } from '../helpers';


export const GameListView = () => {

    const { console } = useParams();

    const games = getGamesByConsole(console);

    return (
        <div className="main">
            <Aside />
            <div className="animate__animated animate__fadeIn main-games">
                <h3 className="view-title">{console}</h3>
                <GameGrid games={games} />
            </div>
        </div>
    )
}
import { Aside, GameGrid } from '../components';
import { games } from '../data';


export const MainView = () => {

    return (
        <div className="main">
            <Aside />
            <div className="animate__animated animate__fadeIn main-games">
                <h3 className="view-title">JUEGOS</h3>
                <GameGrid games={games} />
            </div>
        </div>
    )
}
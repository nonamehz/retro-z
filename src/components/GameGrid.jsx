import { GameGridItem } from './';


export const GameGrid = ({ games }) => {
    return (
        <div className="games-grid">
            {
                games.map((game, index) => (
                    <GameGridItem key={index} {...game} />
                ))
            }
        </div>
    )
}
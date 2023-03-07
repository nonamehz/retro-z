

export const GameGridItem = ({ slug, console }) => {

    const urlImage = `./assets/covers/${console}/${slug}.png`;

    return (
        <div className="game-case">
            <div className="game-case-info">
                <a className="game-case-btn" href={`/game/${console}/${slug}`} target="_blank" rel="noreferrer">JUGAR</a>
            </div>
            <div className="game-case-left"></div>
            <div className="game-case-right">
                <img src={urlImage} alt={`${slug} image`} />
            </div>
        </div>
    )
}
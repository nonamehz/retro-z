import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameBySlug } from '../helpers';


export const GamePage = () => {

    const { slug } = useParams();

    const game = getGameBySlug(slug)[0];

    useEffect(() => {

        const script = document.createElement("script");
        script.src = 'https://www.emulatorjs.com/loader.js';

        const configGame = document.createElement('script');
        configGame.type = 'text/javascript';
        configGame.innerHTML = `
        EJS_player = '#game';
        EJS_biosUrl = '${game.bios}';
        EJS_gameUrl = '${game.room}';
        EJS_core = '${game.core}';
        `;

        document.body.appendChild(script);
        document.body.appendChild(configGame);
        document.title = `RETRO-Z | ${game.name}`

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(configGame);
        }

    }, [game, slug]);

    return (
        <>
            <div className="animate__animated animate__fadeIn game">
                <p>{game.name}</p>
                <div className="emulator-wrapper">
                    <div className="emulator">
                        <div id="game"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
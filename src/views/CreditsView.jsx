import { Aside } from '../components';

export const CreditsView = () => {
    return (
        <div className="main">
            <Aside />
            <div className="animate__animated animate__fadeIn creditos-wrapper">
                <h3 className="view-title">CREDITOS</h3>

                <section>
                    <div className="creditos-img">
                        <img src="assets/logos/emulatorjs.png" alt="emulatorjs logo" />
                    </div>
                    <p>Emulatorjs me permite emular los juegos mostrados, insertando la bios y el room correspondiente al juego y a la consola.</p>
                    <a className="link-btn" href="https://emulatorjs.org/" target='_blank' referrerPolicy='no-referrer'>EMULATORJS</a>
                </section>
            </div>
        </div>
    )
}

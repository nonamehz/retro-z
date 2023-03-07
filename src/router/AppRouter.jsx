import { Route, Routes } from 'react-router-dom';
import { GamePage } from '../pages';
import { CreditsView, GameListView, MainView } from '../views';


export const AppRouter = () => {
    return (
        <Routes>
            <Route index path='/' element={<MainView />} />
            <Route path='/:console' element={<GameListView />} />
            <Route path='/creditos' element={<CreditsView />} />
            <Route path="/game/:console/:slug" element={<GamePage />} />
            <Route path="/*" element={<MainView />} />
        </Routes>
    )
}
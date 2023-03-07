import { Link } from 'react-router-dom';
import { consoles } from '../data';
import { NavItem } from './NavItem';


export const Aside = () => {

    return (
        <aside className="aside">
            <div className="nav-brand">
                <Link to="/">{'{R}'}<span>etro-Z</span></Link>
            </div>
            <nav className="navbar">

                <>
                    {
                        consoles.map((console, index) => (
                            <NavItem key={index} {...console} />
                        ))
                    }
                </>
                <NavItem name='creditos' slug='creditos' />

            </nav>
        </aside>
    )
}
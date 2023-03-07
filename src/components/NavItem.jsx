import { NavLink } from 'react-router-dom';


export const NavItem = ({ name, slug }) => {
    return (
        <NavLink
            to={`/${slug}`}
            className={({ isActive }) => isActive ? 'navbar-item item-selected' : 'navbar-item'}
        >
            <img src={`./assets/icons/${slug}.png`} alt={`${name} icon`} />
            <span>{name}</span>
        </NavLink>
    )
}
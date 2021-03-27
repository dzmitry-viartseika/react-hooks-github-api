import React from 'react';
import { NavLink } from "react-router-dom";
import navList from '../../constants/navigation/navList';

const Navbar = () => {

    return (
        <nav className={'navbar navbar-dark bg-primary navbar-expand-lg'}>
            <div className={'navbar-brand'}>
                GitHub Поиск
            </div>
            <ul className={'navbar-nav'}>
                {
                    navList.map((item, index) => (
                        <li className={'nav-item'} key={item.id}>
                            <NavLink to={item.route}
                               className={'nav-link'}
                            >
                                { item.text }
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar;

import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <nav className='main-nav'>
            <ul className='list-items'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/Cats'>Cats</NavLink></li>
                <li><NavLink to='/Dogs'>Dogs</NavLink></li>
                <li><NavLink to='/Birds'>Birds</NavLink></li>
            </ul>
        </nav> 
    )
};

export default Nav;
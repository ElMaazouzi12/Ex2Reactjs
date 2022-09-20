import React from 'react';
import './Header.css';


function Header() {
    return <div className='col-md-4 rounded header'>
            <div className='logo'></div>
            <div>
                <h2>Titre du site</h2>
                <p>Notre slogan</p>
            </div>
        </div>
}

export default Header;
import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="sticky-top mt-3">
                <div className="container-fluid  justify-content-center">
                    <a href="https://www.manadoceu.com">
                        <img height="100" alt="Maná do Céu"
                             className="mana-logo floating"
                             src="/logo.svg"/></a>
                </div>
            </header>
        );
    }
}

export default Header;
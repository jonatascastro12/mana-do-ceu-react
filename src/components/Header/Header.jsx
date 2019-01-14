import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header class="sticky-top mt-3">
                <div class="container-fluid">
                    <a href="https://www.manadoceu.com"><img height="100" alt="Maná do Céu"
                                                             className="mana-logo floating"
                                                             src="https://d3kzcxx51d0b63.cloudfront.net/static/images/logo.svg"/></a>
                </div>
            </header>
        );
    }
}

export default Header;
import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="pt-5 pb-5 bg-footer">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <ul className="nav justify-content-start">
                                <li className="navbar-item text-left">
                                    <a href="/" title="Início" className="nav-link text-light">
                                        <FontAwesomeIcon icon={['fas', 'home']}/> Início</a>
                                </li>
                                <li className="navbar-item text-left">
                                    <a href="/sobre" title="Sobre" className="nav-link text-light">
                                        <FontAwesomeIcon icon={['fas', 'info-circle']}/> Sobre</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-credits text-right">
                            <p>Palavras por <a className=" text-light"
                                               href="https://www.facebook.com/EliVileladosSantos"
                                               target="_blank">Pr. Eli Vilela</a>.<br/>
                                Desenvolvido com <span className="text-danger pulse2">❤</span> por <a
                                    className=" text-light" target="_blank" href="http://www.jonatascastro.com">Jônatas
                                    Castro</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
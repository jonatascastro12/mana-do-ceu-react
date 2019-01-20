import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faLink, faHome, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faFacebookF, faTwitter, faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import './App.css';
import Mana from "./pages/Mana/Mana";
import About from "./pages/About/About";

library.add(faWhatsapp, faLink, faFacebookF, faTwitter, faGooglePlus, faHome, faInfoCircle);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/sobre" component={About}/>
                    <Route path="/mana/:slug" component={Mana}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

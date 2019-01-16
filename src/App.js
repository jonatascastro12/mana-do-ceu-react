import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faFacebookF, faTwitter, faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Share from "./components/Share/Share";
import ClipboardJS from 'clipboard';

library.add(faWhatsapp, faLink, faFacebookF, faTwitter, faGooglePlus);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <Share clipboard={ClipboardJS}/>
            </div>
        );
    }
}

export default App;

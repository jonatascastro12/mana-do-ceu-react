import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faLink, faHome, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faFacebookF, faTwitter, faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import './App.css';
import Mana from "./pages/Mana/Mana";
import About from "./pages/About/About";
import Spinner from "./components/Spinner/Spinner";
import {get} from "axios";
import {API_URL} from "./index";

library.add(faWhatsapp, faLink, faFacebookF, faTwitter, faGooglePlus, faHome, faInfoCircle);

class App extends Component {

    state = {
        slug: ''
    };

    async fetchIndex(day) {
        return get(`${API_URL}_index.json`).then((res) => {
            return res.data[day];
        });
    }

    getYearDay = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={() => {
                        const day = this.getYearDay();

                        this.fetchIndex(day).then((slug) => {
                            this.setState({slug})
                        });

                        if (this.state.slug) {
                            return (
                                <Redirect to={`/mana/${this.state.slug}`}/>
                            )
                        }
                        return <div className="h-100 w-100 d-flex justify-content-center align-content-center"><Spinner/></div>;
                    }}/>
                    <Route path="/sobre" component={About}/>
                    <Route path="/mana/:slug" component={Mana}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Share from "./components/Share/Share";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <Share />
            </div>
        );
    }
}

export default App;

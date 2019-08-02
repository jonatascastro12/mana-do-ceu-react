import React, { Component } from 'react';
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Share from "../../components/Share/Share";
import ClipboardJS from "clipboard";
import Footer from "../../components/Footer/Footer";
import { get } from 'axios';
import { API_URL } from "../../index";


class Mana extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slug: null,
            mana: null
        }
    }
    
    fetchMana(slug) {
        get(`${API_URL}${slug}.json`).then((res) => {
            this.setState({ slug, mana: res.data });
        })
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        this.fetchMana(slug);
    }

    render() {
        return (
            <div className="text-center">
                <Header />
                <Main {...this.state} />
                <Share clipboard={ClipboardJS}  {...this.state} />
                <Footer />
            </div>
        );
    }
}

export default Mana;
import React, {Component} from 'react';
import {APP_URL} from "../../index";
import styles from './Main.module.css'

class Main extends Component {
    renderFbComments() {
        if (this.props.mana)
            return (
                <div className="fb-comments"
                     data-href={`${APP_URL}/mana/${this.props.mana.slug}`}
                     data-numposts="5"></div>
            )
    }

    componentDidUpdate() {
        if (window.FB && window.FB.XFBML && window.FB.XFBML.parse) {
            window.FB.XFBML.parse();
        }
    }

    render() {
        const renderHTML = (rawHTML) =>
            React.createElement("span", {
                dangerouslySetInnerHTML: {
                    __html:
                        rawHTML
                            .replace(/\\n|\\r/g, " ")
                            .replace(/\<p\>&nbsp\;\<\/p\>/g, " ")
                }
            });


        return (
            <main className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-6">
                        <h1>{this.props.mana ? this.props.mana.title : ''}</h1>

                        <p className={'lead ' + styles.animated + ' ' + styles.fadeIn}>
                            <em>{this.props.mana ? renderHTML(this.props.mana.citation) : ''}
                                {this.props.mana ? this.props.mana.reference : ''}</em>
                        </p>
                        <p className="lead animated fadeIn">
                            {this.props.mana ? renderHTML(this.props.mana.content) : ''}
                        </p>
                    </div>
                </div>
                <hr/>
                {this.renderFbComments()}
            </main>
        );
    }
}

Main.propTypes = {};

export default Main;
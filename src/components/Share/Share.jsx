import React, {Component} from 'react';
import ShareButton from "../ShareButton/ShareButton";
import './Share.css';
import {APP_URL} from "../../index";
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';


class Share extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popoverOpen: false
        }
    }

    permalink() {
        if (this.props.mana)
            return `${APP_URL}/mana/${this.props.mana.slug}`;
    }

    componentDidUpdate() {
        const Clipboard = this.props.clipboard;

        this.clipboard = new Clipboard('#link', {
            text: () => this.permalink()
        });

        this.clipboard.on('success', (e) => {

        })
    }

    renderButtons() {
        if (this.permalink())
            return (
                <div className="col-lg-6 flex-row d-flex justify-content-center flex-wrap">
                    <ShareButton type="facebook" link={this.permalink()}>Compartilhe</ShareButton>
                    <ShareButton type="twitter" link={this.permalink()}>Compartilhe</ShareButton>
                    {/*<ShareButton type="google" link={this.permalink()}>Compartilhe</ShareButton>*/}
                    <ShareButton type="whatsapp" link={this.permalink()}>No Whatsapp</ShareButton>
                    <ShareButton type="link" id="link">Link</ShareButton>

                </div>
            )
    }

    render() {
        return (
            <section className="share-section p-4">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6">
                            <h2>Compartilhe esta mensagem agora mesmo!</h2>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-3">
                        {this.renderButtons()}
                    </div>
                </div>
            </section>
        );
    }
}

export default Share;
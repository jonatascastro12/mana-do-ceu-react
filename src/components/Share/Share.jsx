import React, {Component} from 'react';
import ShareButton from "../ShareButton/ShareButton";
import './Share.css';


class Share extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const Clipboard = this.props.clipboard;

        this.clipboard = new Clipboard('#link', {
            text: () => 'mana do ceu 123123132'
        });

        this.clipboard.on('success', (e) => {
            console.log(e);
        })
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
                        <div className="col-lg-6 flex-row d-flex justify-content-center flex-wrap">
                            <ShareButton type="facebook" link={''}>Compartilhe</ShareButton>
                            <ShareButton type="twitter" link={''}>Compartilhe</ShareButton>
                            <ShareButton type="google" link={''}>Compartilhe</ShareButton>
                            <ShareButton type="whatsapp" link={''}>No Whatsapp</ShareButton>
                            <ShareButton type="link" id="link">Link</ShareButton>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Share;
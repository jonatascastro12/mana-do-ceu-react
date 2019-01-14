import React, {Component} from 'react';
import ShareButton from "../ShareButton/ShareButton";

class Share extends Component {
    render() {
        return (
            <section>
                <h2>Compartilhe esta mensagem agora mesmo!</h2>
                <ShareButton icon="facebook"></ShareButton>
            </section>
        );
    }
}

export default Share;
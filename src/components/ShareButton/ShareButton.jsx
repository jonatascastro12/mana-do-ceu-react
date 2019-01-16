import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class ShareButton extends Component {

    get getTypeProps() {
        switch (this.props.type) {
            case 'whatsapp':
                return {color: '#FFFFFF', backgroundColor: '#3FAD46', icon: 'whatsapp'};
            case 'facebook':
                return {color: '#FFFFFF', backgroundColor: '#4582ec', icon: 'facebook-f'};
            case 'twitter':
                return {color: '#FFFFFF', backgroundColor: '#55acee', icon: 'twitter'};
            case 'google':
                return {color: '#FFFFFF', backgroundColor: '#D34836', icon: 'twitter'};
            default:
                return {iconType: 'fa', color: '#222222', backgroundColor: '#fdfdfd', icon: 'link'};
        }
    }

    render() {
        let props = this.getTypeProps;
        return (
            <button type="button" id={this.props.id} className="btn m-2"
                    style={{color: props.color, backgroundColor: props.backgroundColor}}>
                <FontAwesomeIcon icon={[props.iconType ? props.iconType : 'fab', props.icon]}/>&nbsp;
                {this.props.children}
            </button>
        );
    }
}


export default ShareButton;
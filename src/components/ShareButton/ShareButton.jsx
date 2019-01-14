import React, {Component} from 'react';

class ShareButton extends Component {

    getTypeProps(type) {
        switch (type) {
            case 'facebook':
                return {color: '#4582ec', icon: 'facebook-f'};
            case 'twitter':
                return '#55acee';
            case 'google':
                return '#D34836'

        }
    }

    render() {
        return (
            <button className="btn">
                <i className={'fa fa-' + this.props.icon}></i>
                {this.children}
            </button>
        );
    }
}


export default ShareButton;
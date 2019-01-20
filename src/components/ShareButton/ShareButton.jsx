import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {APP_URL} from "../../index";
import {Button, Tooltip, PopoverBody} from 'reactstrap';


class ShareButton extends Component {

    constructor(p) {
        super(p);
        this.state = {popoverOpen: false}
    }

    get getTypeProps() {
        switch (this.props.type) {
            case 'whatsapp':
                return {
                    color: '#FFFFFF',
                    backgroundColor: '#3FAD46',
                    icon: 'whatsapp',
                    shareUrl: 'https://wa.me/?text='
                };
            case 'facebook':
                return {
                    color: '#FFFFFF',
                    backgroundColor: '#4582ec',
                    icon: 'facebook-f',
                    shareUrl: 'https://www.facebook.com/sharer/sharer.php?u='
                };
            case 'twitter':
                return {
                    color: '#FFFFFF',
                    backgroundColor: '#55acee',
                    icon: 'twitter',
                    shareUrl: 'http://twitter.com/share?text=Leia o maná do céu de hoje&hashtags=manadoceu&url='
                };
            case 'google':
                return {color: '#FFFFFF', backgroundColor: '#D34836', icon: 'google'};
            default:
                return {iconType: 'fa', color: '#222222', backgroundColor: '#fdfdfd', icon: 'link'};
        }
    }

    handleClick() {
        let props = this.getTypeProps;
        if (this.props.type !== 'link')
            window.open(`${props.shareUrl}${this.props.link}`, "_blank");
        else {
            this.setState({popoverOpen: true});
            setTimeout(() => {
                this.setState({popoverOpen: false})

            }, 4000);
        }

    }

    render() {
        let props = this.getTypeProps;
        return (
            <Fragment>
                <Button type="button" id={this.props.id} className="m-2" onClick={(e) => this.handleClick(e)}
                        style={{color: props.color, backgroundColor: props.backgroundColor, border: 'none'}}>
                    <FontAwesomeIcon icon={[props.iconType ? props.iconType : 'fab', props.icon]}/>&nbsp;
                    {this.props.children}
                </Button>
                <Tooltip target="link" placement="bottom" isOpen={this.state.popoverOpen}>
                    Copiado para área de transferência!
                </Tooltip>
            </Fragment>


        );
    }
}


export default ShareButton;
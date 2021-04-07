import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react';

import "./style.css";

export default class MainAddReceipt extends Component {

    uploadDesign = () => {
        return (
            <Button animated size='massive' id='buttonStyle'>
            <Button.Content visible>Upload Here</Button.Content>
            <Button.Content hidden>
                <Icon name='arrow up' />
            </Button.Content>
            </Button>
            
        );
        
    }
 
    render() {
        return this.uploadDesign();
    }
}
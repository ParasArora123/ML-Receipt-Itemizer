import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';
import {withRouter} from 'react-router'
import { Button, Header, Divider } from 'semantic-ui-react';


import "./style.css";

class AddNamesSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {names: this.props.names};
    }

    header = () => {
        return (
            <Header as='h1' textAlign='center' id='header-text'>
                {this.props.header}
            </Header>
        );
    }

    submitButton = () => {
        return (
            <Button id='submit-button' size='massive'>
                Generate Invoice
            </Button>
        );
    }

    createFullSidebarContainer = () => {
        return (
                <div className='sidebar'>
                    <div className='whitespace'></div>
                    {this.header()}
                    <div className='whitespace'></div>
                    <Divider />
                    <div className='submit-button-alignment'>{this.submitButton()}</div>
                </div>
            );
    }

    render() {
        return this.createFullSidebarContainer();
    }
}

export default withRouter(AddNamesSidebar);

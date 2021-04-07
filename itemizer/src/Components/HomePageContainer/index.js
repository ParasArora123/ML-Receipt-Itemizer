import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

import "./style.css";
import MainAddReceipt from '../../Components/MainAddReceipt';


export default class HomePageContainer extends Component {

    createContainer = () => {
        return(
            <Container fluid className='outer' textAlign='center'>
                <Header as='h1' id='header'>Receipt Itemizer</Header>
                <MainAddReceipt id="mainButton"/>
            </Container>
        );
    }

    render() {
        return this.createContainer();
    }

}
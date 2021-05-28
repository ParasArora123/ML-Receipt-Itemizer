import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./style.css";
import MainAddReceipt from '../MainAddReceipt';
import NavBar from '../NavBar';
import FadeIn from 'react-fade-in'


export default class HomePageContainer extends Component {

    createContainer = () => {
        return(
            <div className='outer-div'>
                <Container fluid className='outer' textAlign='center'>
                <NavBar id="nav" />
                    <FadeIn>
                        <Header as='h1' id='header'>Receipt Itemizer</Header>
                        <MainAddReceipt id="mainButton"/>
                    </FadeIn>
                </Container>
            </div>
        );
    }

    render() {
        return this.createContainer();
    }

}
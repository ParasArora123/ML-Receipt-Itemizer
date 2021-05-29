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
                <NavBar id="nav" />
                <FadeIn>
                    <Header as='h1' id='header1'>Receipt Itemizer</Header>
                    <Header as='h2' id='header2'>Submit Your Receipts to Generate a Beautiful Invoice</Header>
                    <MainAddReceipt id="mainButton"/>
                </FadeIn>
            </div>
        );
    }

    render() {
        return this.createContainer();
    }

}
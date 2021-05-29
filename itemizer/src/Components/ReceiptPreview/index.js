import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./style.css";
import MainAddReceipt from '../MainAddReceipt';
import NavBar from '../NavBar';


export default class ReceiptPreview extends Component {

    render() {
        return(
            <img src = {this.props.file}/>
        );
    }
}
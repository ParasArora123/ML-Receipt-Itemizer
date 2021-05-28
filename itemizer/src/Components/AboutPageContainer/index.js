import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./style.css";
import MainAddReceipt from '../MainAddReceipt';
import NavBar from '../NavBar';


export default class AboutPageContainer extends Component {

    render() {
        return(
            <div>
                Receipt Itemizer by Paras Arora, Enzo Filangeri, and Isaiah Gama
            </div>
        );
    }


}
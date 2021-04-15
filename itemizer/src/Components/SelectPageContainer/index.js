import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./style.css";
import MainAddReceipt from '../MainAddReceipt';


export default class SelectPageContainer extends Component {

    createContainer = () => {
        return(
            <div>
                <Container fluid className='outer' textAlign='center'>
                    Page 2
                </Container>
            </div>
        );
    }

    render() {
        return this.createContainer();
    }

}
import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import "./style.css";
import MainAddReceipt from '../MainAddReceipt';


class SelectPageContainer extends Component {

    createContainer = () => {
        const history = this.props;
        console.log(history.location.state[0]);
        return(
            <div>
                <Container fluid className='outer' textAlign='center'>
                    Page 2
                </Container>
                <div>
                    <img src = {URL.createObjectURL(history.location.state[0])}/>
                    {history.location.state[0].name}
                </div>
            </div>

        );
    }

    render() {
        return(
            this.createContainer()
        );
    }

}

export default withRouter(SelectPageContainer);
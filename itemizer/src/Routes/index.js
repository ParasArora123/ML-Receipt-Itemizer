import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {HomePage, SelectPage} from '../Screens/index.js'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact >
                        <HomePage/>
                    </Route>

                    <Route path='/select-page' exact >
                        <SelectPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;


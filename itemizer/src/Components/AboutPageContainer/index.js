import React, {Component} from 'react';
import {Container, Header, Embed} from 'semantic-ui-react';

import FadeIn from 'react-fade-in';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./style.css";
import MainAddReceipt from '../MainAddReceipt/';
import NavBar from '../NavBar';


export default class AboutPageContainer extends Component {

    EmbedExampleYouTube = () => (
        <Embed
          id='dQw4w9WgXcQ'
          placeholder='/images/image-16by9.png'
          source='youtube'
        />
    )

    render() {
        return(
            <div>
                
                <NavBar id="nav" />
                <FadeIn>
                    Receipt Itemizer by Paras Arora, Enzo Filangeri, and Isaiah Gama
                    {this.EmbedExampleYouTube()}
                </FadeIn>
            </div>
        );
    }


}
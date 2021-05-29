import React, {Component} from 'react';
import {Container, Header, Embed} from 'semantic-ui-react';

import FadeIn from 'react-fade-in';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./style.css";
import MainAddReceipt from '../MainAddReceipt/';
import NavBar from '../NavBar';
import ReactPlayer from "react-player"

export default class AboutPageContainer extends Component {

    EmbedExampleYouTube = () => (
        <div>
            <ReactPlayer
            url="https://www.youtube.com/embed/dQw4w9WgXcQ&autoplay=1"
            playing = {true}
            width = {2000}
            height = {800}
            />
        </div>
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
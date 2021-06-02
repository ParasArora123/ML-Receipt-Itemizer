import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import { Button, Icon } from 'semantic-ui-react';

import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import "./style.css";
import MainAddReceipt from '../MainAddReceipt';
import ReceiptPreview from '../ReceiptPreview';
import AddNamesSidebar from '../AddNamesSidebar';
import NavBar from '../NavBar';


class SelectPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {files: [URL.createObjectURL(this.props.location.state[0])]}
    }

    createContainer = () => {
        const onFilechange = ( e ) => {
            /*Selected files data can be collected here.*/
            if(e.target.files.length !== 0){
                this.setState({files: this.state.files.concat(URL.createObjectURL(e.target.files[0]))})
            }
        }
        
        const fileInputRef = React.createRef();

        const onBtnClickAdd = () => {
            /*Collecting node-element and performing click*/
            fileInputRef.current.click();
        }

        const onBtnClickRemove = (elem) => {
            this.setState({files: this.state.files.filter((item) => item !== elem)})
        }

        const history = this.props;
        console.log(history.location.state[0]);
        const previews = (this.state.files).map((element) => 
            <div className='receipt-container'>
                <i class="cut icon" id="delete-btn" onClick={() => onBtnClickRemove(element)}></i>
                <ReceiptPreview file = {element}/>
            </div>
        )
        
        return(
            <div >
                <NavBar id='nav'/>
                <div id='outer-container'>
                    <div id='add-names'>
                        <AddNamesSidebar names={'hi'} header='ADD NAMES' />
                    </div>
                    <div>
                        <button class="circular large ui red right floated icon button" onClick={onBtnClickAdd} id='add-btn'>
                            <i class="plus icon"></i>
                        </button>
                        <input ref={fileInputRef} type='file' hidden onInput={onFilechange} />
                    </div>
                    {previews}
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
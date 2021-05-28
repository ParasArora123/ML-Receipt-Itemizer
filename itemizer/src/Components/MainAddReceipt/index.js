import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import "./style.css";

export default class MainAddReceipt extends Component {

    constructor(props) {
        super(props);
        this.state = { file: null };
      }
    onFilechange = ( e ) => {
        /*Selected files data can be collected here.*/
        this.setState({file: e.target.files})
        
      }


    
    fileInputRef = React.createRef();
    onBtnClick = () => {
        /*Collecting node-element and performing click*/
        this.fileInputRef.current.click();
      }

    uploadDesign = () => {
        
        return (
            <div>
                <Button animated size='massive' id='buttonStyle' onClick={this.onBtnClick}>
                    <Button.Content visible>Upload Here</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow up' />
                    </Button.Content>
                </Button>
                <input ref={this.fileInputRef} type='file' hidden onInput={this.onFilechange} />
            </div>        
        );   
    }
 
    render() {
        console.log(this.state.file);
        return this.uploadDesign();
        
    }
}
import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import "./style.css";

export default class MainAddReceipt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
    }

    history = useHistory();

    onButtonClick = e => {
        this.setState( {file: e.target.files[0]} );
        history.push("/select-page")
    };

    fileInputRef = React.createRef();

    uploadDesign = () => {
        
        return (
            <div>
                <button type="button" onClick={handleClick}>
                    Navigate to another route
                </button>
                <Button animated size='massive' id='buttonStyle' onClick={() => this.fileInputRef.current.click()}>
                    <Button.Content visible>Upload Here</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow up' />
                    </Button.Content>
                </Button>
                <input ref={this.fileInputRef} type='file' hidden onChange={this.onButtonClick} />
            </div>        
        );   
    }
 
    render() {
        return this.uploadDesign();
    }
}
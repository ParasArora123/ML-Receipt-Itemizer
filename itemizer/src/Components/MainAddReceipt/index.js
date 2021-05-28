import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import {withRouter} from 'react-router'
import ImageUploader from 'react-images-upload';
import "./style.css";
import SelectPageContainer from '../SelectPageContainer';



const MainAddReceipt = () => {

    const history = useHistory();
    var myfile = null;

    const onFilechange = ( e ) => {
        /*Selected files data can be collected here.*/
        myfile = e.target.files;
        console.log(myfile);
        history.push({pathname:'/select-page',state:myfile});
    }


    
    const fileInputRef = React.createRef();
    const onBtnClick = () => {
        /*Collecting node-element and performing click*/
        fileInputRef.current.click();
      }

    const uploadDesign = () => {
        
        return (
            <div>
                <Button animated size='massive' id='buttonStyle' onClick={onBtnClick}>
                    <Button.Content visible>Upload Here</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow up' />
                    </Button.Content>
                </Button>
                <input ref={fileInputRef} type='file' hidden onInput={onFilechange} />
            </div>        
        );   
    }
 
    return(
        console.log(myfile),
        uploadDesign()
    );
}

export default withRouter(MainAddReceipt);
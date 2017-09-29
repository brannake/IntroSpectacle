import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Button} from 'react-materialize';

class SubmitForm extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        };
    };

    handleChange = (event) => {
        this.setState({
            text: event.currentTarget.value
        });
      }

    //Posts the image to the server with the date and month attached
    uploadFileandRefresh = (event) => {
        let fd = new FormData();    
        fd.append('file', ReactDOM.findDOMNode(this.refs.file).files[0]);
        fd.append('date', this.props.selectedDate);
        fd.append('month', this.props.selectedMonth);
        fd.append('text', this.state.text);

        $.ajax({
            url: '/api/images',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: (data) => {
                console.log(data);
                this.props.refreshImages();
            } 
        });
        this.refs.captionText.value = '';
        this.refs.file.value = '';
        console.log(window.CONTEXT);
    }

    render() {
        return (
            <div>
                <br/>     
               <form ref="uploadForm" className="uploader" encType="multipart/form-data" >
                   <input ref="file" type="file" name="file" className="upload-file"/>
                   <input
                        ref="captionText"
                        id="caption-text"
                        type="text" 
                        name="text" 
                        placeholder="How was your day?"
                        onChange={this.handleChange}
                    />
                   <Button 
                        waves="light" 
                        type="button" 
                        ref="button"
                        value="Upload" 
                        onClick={this.uploadFileandRefresh}
                    >
                        Upload
                    </Button>
               </form>
            </div>
        )
    }
};

export default SubmitForm;
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Button} from 'react-materialize';

class SubmitForm extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: ''
        };
    };

    //Posts the image to the server with the date and month attached
    uploadFileandRefresh = (event) => {
        let fd = new FormData();    
        fd.append('file', ReactDOM.findDOMNode(this.refs.file).files[0]);
        fd.append('date', this.props.selectedDate);
        fd.append('month', this.props.selectedMonth);

        $.ajax({
            url: '/api/images',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data){
                console.log(data);
            } 
        });
        this.props.refreshImages();
    }

    render() {
        return (
            <div>
                <br/>     
               <form ref="uploadForm" className="uploader" encType="multipart/form-data" >
                   <input ref="file" type="file" name="file" className="upload-file"/>
                   <Button waves="light" type="button" ref="button" value="Upload" onClick={this.uploadFileandRefresh}>Upload</Button>
               </form>
            </div>
        )
    }
};

export default SubmitForm;
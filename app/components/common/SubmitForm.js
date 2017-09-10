import React, { Component } from "react";
import ReactDOM from 'react-dom';

class SubmitForm extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: ''
        };
    };

    //Posts the image to the server as a blob
    uploadFile = (event) => {
        let fd = new FormData();    
        fd.append('file', ReactDOM.findDOMNode(this.refs.file).files[0]);
        fd.append('date', this.props.selectedDate);
        fd.append('month', this.props.month);

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
    }

    render() {
        return (
            <div>                
               <form ref="uploadForm" className="uploader" encType="multipart/form-data" >
                    <input ref="file" type="file" name="file" className="upload-file"/>
                   <input type="button" ref="button" value="Upload" onClick={this.uploadFile} />
               </form>
            </div>
        )
    }
};

export default SubmitForm;
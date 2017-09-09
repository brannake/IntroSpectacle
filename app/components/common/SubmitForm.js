import React, { Component } from "react";

class SubmitForm extends Component {
    state = {
    };
  
readFile() {
    console.log(event);
}

    render() {
      return (
        <div className="container">
		<div className="row">
			<div className="col s6">
            <form ref='uploadForm' 
                id='uploadForm' 
                action='/api/images' 
                method='post' 
                encType="multipart/form-data">
                <input type="file" name="sampleFile" />
                <input type='submit' value='Upload!' />
            </form>   
			</div>
		</div>
	</div>
      );
    }
  }

export default SubmitForm;
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
				<form id="submit-form" encType="multipart/form-data" method="post" action="/api/images">
					<input className="new-item" name="image" placeholder="Add a Photo and Caption" type="text" />
                    <input id="upload" ref="upload" type="file" accept="image/*"
                        onChange={(event)=> { 
                        this.readFile(event) 
                        }}
                    />
                    <button type="submit" className="btn">Add</button>
				</form>
			</div>
		</div>
	</div>
      );
    }
  }

export default SubmitForm;
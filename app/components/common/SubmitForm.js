import React, { Component } from "react";

class SubmitForm extends Component {
    constructor() {
        super()
        this.state = {
          works: true,
          image: '',
        };

    this.loadFile = this.loadFile.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    };

    clickadd(e) {
        document.getElementById('uploadfiles').click();
      }
    
      loadFile(e) {
        e.preventDefault();
        var reader = new FileReader();
        reader.onload = () => {
          this.setState({ image: reader.result });
        };
        
        reader.readAsDataURL(e.target.files[0]);
        ;
      };
    
    handleButtonClick(event) {
        $.ajax({
            type: "POST",
            url: "/api/images",
            data: this.state.image,
            dataType: "JSON",
            processData: false,
            contentType: false
        }).done((res)=>{
            console.log(data);
            });
          };

    render() {
      return (
        <div className="container">
		<div className="row">
			<div className="col s6">
            <form ref='uploadForm' 
                id='uploadForm' 
                encType="multipart/form-data">
                <input type="text" name="caption"/>
                <input type="file" id="uploadfiles" accept="image/*" name="sampleFile" onChange={this.loadFile} />
                <input type='submit' value='Upload!' onClick={this.handleButtonClick}/>
            </form>   
			</div>
		</div>
	</div>
      );
    }
}
export default SubmitForm;
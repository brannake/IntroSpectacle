import React from "react";

const SubmitForm = () => (
        <div className="container">
		<div className="row">
			<div className="col s6">
				<form id="submit-form">
					<input className="new-item" placeholder="Add a Photo and Caption" type="text" />
					<button type="submit" className="btn btn-default">Add</button>
				</form>
			</div>
		</div>
	</div>
);
    
export default SubmitForm;
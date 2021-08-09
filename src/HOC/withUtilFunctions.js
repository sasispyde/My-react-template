import React from 'react';

const withUtilFunctions = (
	Component,
	state 		= {},
	fileHandler = false,
	requestInfo = {},
	validation
)  => {

	const showMessage = (message) => {
		let messageContainer = document.getElementById('message');
		if(messageContainer.childNodes) {
			messageContainer.style.display = "block";
			messageContainer.childNodes[0].innerHTML = message;

			setTimeout( () => {
				messageContainer.style.display = "none";
				messageContainer.childNodes[0].innerHTML = "";
			},3000);
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(this.state);
	}

	return (props) => (
	   	<Component 
	   		showMessage={showMessage} 
	   		{...props}
	   	/>  
    );
}

export default withUtilFunctions;


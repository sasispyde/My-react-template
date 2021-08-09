import React from 'react';

export default function Error(props) {

	let style = {
		color : "tomato",
		fontSize: "13px",
		letterSpacing: "1px",
		padding: "2px 0px",
		margin: "0",
		textAlign: "left"
	}

	if(props.network) {
		style['margin']	= "10px 0px";
		style["textAlign"] = "center";
	} 
	
	return (
		<p style={props.className ? {} : style} className={props.className}>{props.children}</p>
	)
}
import React from 'react'

export default function Label(props) {
	if(props.required) {
		return (
			<label className={props.className}>{props.children} <span className="required_symbol">*</span></label>
		)
	}
	return (
		<label className={props.className}>{props.children}</label>
	)
}
import React from 'react';
import Label from '../label/label';
import Error from '../error/error';

function FormGenerator({onSubmit,className,formFields=[],...props}) {
	if(!onSubmit) {
		return null
	}
	return (
		<form className={className} onSubmit={onSubmit}>			
			{
				formFields.map( (field,index) => {
					switch(field.type) {
						case "text" : {
							return (
								<React.Fragment key={index}>
								<Label required={field.required}>{field.label}</Label>
								<input name= {field.name} type= "text" onChange={field.onChange} value= {field.value} id= {field.id} placeholder= {field.placeholder} className={field.className} />
								<Error className={field.errorClass} >{(field.error !== undefined && field.error !== "" ) ? field.error : ""}</Error>
								</React.Fragment>
							)
						}
						case "email" : {
							return (
								<React.Fragment key={index}>
								<Label required={field.required}>{field.label}</Label>
								<input name= {field.name} type= "email" onChange={field.onChange} value= {field.value} id= {field.id} placeholder= {field.placeholder} className={field.className} />
								<Error className={field.errorClass} >{(field.error !== undefined && field.error !== "" ) ? field.error : ""}</Error>
								</React.Fragment>
							)
						}
						case "file" : {
							return (
								<React.Fragment key={index}>
								<Label required={field.required}>{field.label}</Label>
								<input name= {field.name} type= "file" onChange={field.onChange} id= {field.id} className={field.className} />
								<Error className={field.errorClass} >{(field.error !== undefined && field.error !== "" ) ? field.error : ""}</Error>
								</React.Fragment>
							)
						}
						case "password" : {
							return (
								<React.Fragment key={index}>
								<Label required={field.required}>{field.label}</Label>
								<input name= {field.name} type= "password" onChange={field.onChange} value= {field.value} id= {field.id} placeholder= {field.placeholder} className={field.className} />
								<Error className={field.errorClass} >{(field.error !== undefined && field.error !== "" ) ? field.error : ""}</Error>
								</React.Fragment>
							)
						}
						case "number" : {
							return (
								<React.Fragment key={index}>
								<Label required={field.required}>{field.label}</Label>
								<input name= {field.name} type= "number" onChange={field.onChange} value= {field.value} id= {field.id} placeholder= {field.placeholder} className={field.className} />
								<Error className={field.errorClass} >{(field.error !== undefined && field.error !== "" ) ? field.error : ""}</Error>
								</React.Fragment>
							)
						}
						case "button" : {
							return <input key={index} name= {field.name} type= "button" value= {field.value} id= {field.id} className={field.className} />
						}
						case "submit" : {
							return <input key={index} name= {field.name} type= "submit" value= {field.value} id= {field.id} className={field.className} />
						}
						case "checkbox" : {
							return (
								<React.Fragment key={index}>
								<input name= {field.name} type= "checkbox" checked={field.checked} onChange={field.onChange} value= {field.value} id= {field.id} className={field.className} />
								<Error className={field.errorClass} >{(field.error !== undefined && field.error !== "" ) ? field.error : ""}</Error>
								<Label required={field.required}>{field.label}</Label>
								</React.Fragment>
							)
						}
						case "date" : {
							return (
								<React.Fragment key={index}>
								<Label required={field.required}>{field.label}</Label>
								<input name= {field.name}  min={field.minDate} max={field.maxDate} type= "date" onChange={field.onChange} value= {field.value} id= {field.id} className={field.className} />
								<Error className={field.errorClass} >{(field.error !== undefined && field.error !== "" ) ? field.error : ""}</Error>
								</React.Fragment>
							)
						}
						case "radio" : {
							return (
								<React.Fragment key={index}>
								<input key={index} name= {field.name} type= "radio" onChange={field.onChange} checked={field.checked} value= {field.value} id= {field.id} className={field.className} />
								<Error className={field.errorClass} >{(field.error !== undefined && field.error !== "" ) ? field.error : ""}</Error>
								<Label required={field.required}>{field.label}</Label>
								</React.Fragment>
							)
						}
						default : {
							return null;
						}
					}
				})
			}
		</form>
	)
}

export default React.memo(FormGenerator);
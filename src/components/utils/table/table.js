import React from 'react';
import classes from './table.module.css';

import TableHead from './table_head';
import TableBody from './table_body';

export default function Table(props) {

	let headers 		= ["Name","Gender","Age","F.Name","M.Name","Address","Register Date"];
	let keys 			= ["name","gender","age","fname","mname","address.street","date"];
	let data 			= [
		{
			id : "1",
			name : "Sasi",
			gender : "Male",
			age : 24,
			fname : "Sakthivel",
			mname : "Sagunthala",
			address : {
				street : "Amman kovil street"
			},
			date : new Date().toString().slice(0,15)
		},
		{
			id : "2",
			name : "Kowshe",
			gender : "Female",
			age : 24,
			fname : "Sakthivel",
			mname : "Sagunthala",
			date : new Date().toString().slice(0,15)
		},
		{
			id : "3",
			name : "Sakthivel",
			gender : "Male",
			age : 52,
			fname : "Duraisamy",
			mname : "unknown",
			date : new Date().toString().slice(0,15)
		},
		{
			id : "4",
			name : "Sagunthala",
			gender : "Female",
			age : 42,
			fname : "Natarajan",
			mname : "unknown",
			date : new Date().toString().slice(0,15)
		}
	];

	return (
		<div>
			<h2>Table</h2>
			<div className={classes.container}>
				<table className={classes.table}>
					<TableHead headings={headers} />
					<TableBody keys={keys} data={data} />
				</table>
			</div>
		</div>
	)
}
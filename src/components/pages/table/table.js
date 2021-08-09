import React from 'react';
import BasicTable from '../../utils/table/table';

/* Overflow hidden must */

export default function Table() {
	return (
		<div style={{'overflow' : "hidden"}}>
			<BasicTable />
		</div>
	)
}
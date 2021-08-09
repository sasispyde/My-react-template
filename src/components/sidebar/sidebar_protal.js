import React from 'react';
import Sidebar from './sidebar';
import ReactDOM from 'react-dom';

export default function Sidebar_portal() {
	return ReactDOM.createPortal(
		<Sidebar />,
	    document.getElementById('sidebar_mobile')
	);
}

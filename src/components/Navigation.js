import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {
	const previousUrl = props.previousUrl ? <Link to={props.previousUrl} className="nav-item">&larr;</Link> : null;
	
	return (
		<div className="header" id="navBar">
			{previousUrl}
			<span className="nav-item">
				{props.title.charAt(0).toUpperCase() + props.title.slice(1)}
            </span>
		</div>
	);
};
export default Navigation;
import React from 'react';
import { Link } from 'react-router-dom'

const WidgetCreation: React.FC = () => {
	return (
		<div className="flex flex-col w-10/12 gap-2 my-4">
			<Link to="/todoCreation">
				<button className="w-full button-theme">To Do List</button>
			</Link>
			<button className="button-theme">Calendar</button>
			<button className="button-theme">Checklist</button>
		</div>
	)
}
export default WidgetCreation;

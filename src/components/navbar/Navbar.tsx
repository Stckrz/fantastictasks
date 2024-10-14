import React from 'react';
import { Link } from 'react-router-dom';
import NavUserInfo from '../auth/NavUserInfo';
const Navbar: React.FC = () => {
	return (
		<div className="min-h-20 border-b flex items-center justify-between sticky top-0 border-theme z-50">
			<Link to="/">
				<div className="p-2 text-lg">
					FantasticTasks!
				</div>
			</Link>
			<NavUserInfo />
		</div>
	)
}
export default Navbar;

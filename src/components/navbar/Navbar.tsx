import React from 'react';
import { Link } from 'react-router-dom';
import NavUserInfo from '../auth/NavUserInfo';
const Navbar: React.FC = () => {
	return (
		<div className="min-h-20 border flex items-center justify-between sticky top-0 bg-backgroundColor">
			<Link to="/">
				<div className="p-2">
					thing
				</div>
			</Link>
			<NavUserInfo />
		</div>
	)
}
export default Navbar;

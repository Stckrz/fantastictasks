import { logout_user } from '@/lib/api/userApi';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom'
const NavUserDropdown: React.FC = () => {
	const [cookie, removeCookie] = useCookies(['userInfo']);

	const logout_handler = async () => {
		try {
			logout_user(cookie.userInfo?.token)
			removeCookie('userInfo', { path: '/' })
		} catch (error) {
			console.log(`error logging out: ${error}`)
		}

	}

	return (
		<div className="flex flex-col items-center justify-center p-2  border absolute top-15 right-2 bg-backgroundColor">
			<div className="flex gap-2 flex-col">
				{cookie.userInfo?.username === undefined &&
					<div className="flex gap-2 flex-col h-full w-full">
						<Link to="/register">
							Register
						</Link>
						<Link to="/login">
							Login
						</Link>
					</div>
				}
				{cookie.userInfo?.token &&
					<Link onClick={() => { logout_handler() }} to="/logout">
						Logout
					</Link>
				}
			</div>
		</div>
	)
}
export default NavUserDropdown;

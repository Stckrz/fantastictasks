import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import NavUserDropdown from './NavUserDropdown';

const NavUserInfo: React.FC = () => {
	const [cookie] = useCookies(["userInfo"])
	const [dropdownShown, setDropdownShown] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setDropdownShown(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}

	}, [dropdownRef]);

	return (
		<div ref={dropdownRef} className="p-2" onClick={() => { setDropdownShown(!dropdownShown) }}>
			{cookie.userInfo?.user ?
				cookie.userInfo?.user
				: 'Not logged in'
			}
			{dropdownShown &&
				<NavUserDropdown />
			}
		</div>
	)
}
export default NavUserInfo;

import NotLoggedInPage from '@/components/pages/auth/NotLoggedIn';
import { create_list } from '@/lib/api/todoApi';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const TodoCreation: React.FC = () => {
	const [title, setTitle] = useState("");
	const [cookie] = useCookies(['userInfo']);

	const list_creation_handler = () => {
		if (cookie.userInfo?.user) {
			create_list(cookie.userInfo?.id, title)
		}
	}

	return (
		cookie.userInfo?.user
			? <div className="flex flex-col w-full h-full my-4 items-center">
				<div className="flex flex-col gap-2">
					<div>Title</div>
					<input onChange={e => setTitle(e.target.value)}></input>
					<button onClick={list_creation_handler}>ass</button>
				</div>
			</div>
			: <NotLoggedInPage />
	)
}

export default TodoCreation;

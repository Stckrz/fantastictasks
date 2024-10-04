import { login_user } from '@/lib/api/userApi';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [, setCookie] = useCookies(['userInfo']);

	const login_submit_handler = async () => {
		try {
			const data = await login_user(username, password);
			if (data.user) {
				console.log(data)
				setCookie('userInfo', data, { path: '/', maxAge: 3600 });
				navigate('/');
			}
		} catch (error) {
			console.log(`error: ${error}`);
		}
	}

	return (
		<div className="w-full flex flex-col items-center justify-center my-4 h-1/2 gap-4">
			<div className="flex flex-col gap-2 w-3/4">
				<p>Username:</p>
				<input onChange={e => setUsername(e.target.value)} />
			</div>
			<div className="flex flex-col gap-2 w-3/4">
				<p>Password:</p>
				<input type="password" onChange={e => setPassword(e.target.value)} />
			</div>
			<div className="w-3/4 flex items-end justify-end">
				<button onClick={() => { login_submit_handler() }}>Submit</button>
			</div>
		</div>
	)
}
export default LoginForm;

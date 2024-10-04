import { register_user } from '@/lib/api/userApi';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const RegisterPage: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [,setCookie, removeCookie] = useCookies(['userInfo'])

	const registerSubmitHandler = async () => {
		try {
			const a = await register_user(username, password);
			// if(a.username){
			// 	setCookie('userInfo', a, {path: '/', maxAge: 3600});
			// }
			console.log(a)
		} catch (error) {
			console.log(`error: ${error}`);
		}
	}
	// removeCookie('userInfo', {path: '/'})

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
				<button onClick={() => { registerSubmitHandler() }}>Submit</button>
			</div>
		</div>
	)
}
export default RegisterPage;

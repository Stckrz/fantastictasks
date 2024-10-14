const accountApiUrl = 'http://localhost:8000/accounts'
export const register_user = async (username: string, password: string) => {
	const userRegisterObject = {
		username: username,
		password: password
	}
	try {
		const response = await fetch(`${accountApiUrl}/register/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userRegisterObject)
		});
		const data = await response.json()
		console.log(data)
		return data;
	} catch (error) {
		console.log({ "error": `problem creating user: ${error}` });
	}
}

export const login_user = async (username: string, password: string) => {
	const userLoginObject = {
		username: username,
		password: password
	}
	try {
		const response = await fetch(`${accountApiUrl}/login/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userLoginObject)
		});
		const data = await response.json()
		console.log("logindata", data)
		return data;
	} catch (error) {
		console.log({ "error": `problem logging in: ${error}` });
	}
}

export const logout_user = async (token: string) => {
	console.log("token: ", token)
	try {
		const response = await fetch(`${accountApiUrl}/logout/`, {
			method: 'POST',
			headers: {
				'Authorization': `Token ${token}`,
				'Content-Type': 'application/json',
			}
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log({ "error": `problem logging out: ${error}` });
	}
}


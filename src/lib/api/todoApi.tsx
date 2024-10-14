const todoApiUrl = 'http://localhost:8000/toDoList';


export const create_list = async (user: string, title: string) => {
	const todoListObject = {
		title: title,
		user: user
	}
	try {
		const response = await fetch(`${todoApiUrl}/list/create`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(todoListObject),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		return ({ 'error': `${error}` })
	}
}

export const get_list = async (listId: number) => {
	try {
		const response = await fetch(`${todoApiUrl}/list/${listId}`);
		const data = await response.json();
		return data
	} catch (error) {
		return ({ 'error': `${error}` })
	}
}


export const get_items_by_list_id = async (listId: number) => {
	try {
		const response = await fetch(`${todoApiUrl}/list/${listId}/items/`);
		const data = await response.json();
		return data.results
	} catch (error) {
		return ({ 'error': `${error}` })
	}
}

export const update_item_complete_status = async (itemId: number, completed: boolean) => {
	const completeStatusObject = {
		completed: completed
	}
	try {
		const response = await fetch(`${todoApiUrl}/item/${itemId}`, {
			method: "PATCH",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(completeStatusObject)
		});
		const data = await response.json();
		return data
	} catch (error) {
		return ({ 'error': `${error}` });
	}
}


export const post_item_to_list = async (listId: number, title: string, description: string, dueDate: string,) => {
	const todoItemObject = {
		toDoList: listId,
		title: title,
		description: description,
		dueDate: dueDate,
		completed: false,
	}
	try {
		const response = await fetch(`${todoApiUrl}/item/create`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(todoItemObject),
		});
		const data = await response.json();
		return data.results
	} catch (error) {
		return ({ 'error': `${error}` })
	}
}



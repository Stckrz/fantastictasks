const checkListApiUrl = 'http://localhost:8000/checklist';

export const create_checkList = async (user: string, title: string) => {
	const checkListObject = {
		title: title,
		user: user
	}
	try {
		const response = await fetch(`${checkListApiUrl}/create`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(checkListObject),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		return ({ 'error': `${error}` })
	}
}
export const get_check_list_by_id = async (checkListId: number) => {
	try {
		const response = await fetch(`${checkListApiUrl}/${checkListId}`);
		const data = await response.json();
		return data
	} catch (error) {
		return ({ 'error': `${error}` })
	}
}

export const get_items_by_checkList_id = async (checkListId: number) => {
	try {
		const response = await fetch(`${checkListApiUrl}/${checkListId}/items/`);
		const data = await response.json();
		return data.results
	} catch (error) {
		return ({ 'error': `${error}` })
	}
}

export const update_checklist_item_complete_status = async (itemId: number, completed: boolean) => {
	const completeStatusObject = {
		completed: completed
	}
	try {
		const response = await fetch(`${checkListApiUrl}/item/${itemId}`, {
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


export const post_checkList_item_to_list = async (checkListId: number, title: string) => {
	const checkListItemObject = {
		checklist: checkListId,
		title: title,
		completed: false,
	}
		
	try {
		const response = await fetch(`${checkListApiUrl}/item/create`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(checkListItemObject),
		});
		const data = await response.json();
		return data
	} catch (error) {
		return ({ 'error': `${error}` })
	}
}

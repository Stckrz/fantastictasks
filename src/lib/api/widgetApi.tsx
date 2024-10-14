const widgetUrl = 'http://localhost:8000/widgets'
export const get_widget_list_by_user_id = async(userId: number) => {
	try{
		const response = await fetch(`${widgetUrl}/widgets/user/${userId}`)
		const data = await response.json();
		return data.results
	} catch (error) {
		return ({ 'error': `${error}` })
	}
}
export const update_widget_active_status = async (widgetId: number, active: boolean) => {
	const completeStatusObject = {
		active: active
	}
	try {
		const response = await fetch(`${widgetUrl}/${widgetId}/`, {
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

export const delete_widget_by_id = async (widgetId: number) => {
	try {
		const response = await fetch(`${widgetUrl}/${widgetId}`, {
			method: "DELETE"
		});
		const data = await response.json();
		return data
	} catch (error) {
		return ({ 'error': `${error}` })
	}
}


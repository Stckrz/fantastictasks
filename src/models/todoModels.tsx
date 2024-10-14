export interface TodoItemModel{
	id: number,
	title: string,
	description: string,
	dueDate: string,
	completed: boolean,
}

export interface TodoListModel{
	id: number,
	title: string,
	user: number,
}

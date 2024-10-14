import { TodoListModel } from "./todoModels";

export interface Widget{
	id: number,
	active: boolean,
	user: number,
	widgetType: string,
	todolist: TodoListModel
}

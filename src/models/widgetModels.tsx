import { CheckListModel } from "./checklistModels";
import { TodoListModel } from "./todoModels";

export interface Widget{
	id: number,
	active: boolean,
	order: number,
	user: number,
	widgetType: string,
	todolist: TodoListModel,
	checklist: CheckListModel
}

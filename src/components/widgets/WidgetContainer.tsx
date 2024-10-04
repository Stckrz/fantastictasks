import React from 'react';
import Calendar from './calendar/Calendar';
import TodoList from './todolist/TodoList';
import Checklist from './checklist/Checklist';

export enum WidgetType {
	Calendar,
	TodoList,
	CheckList,
}

interface WidgetContainerProps {
	widgetType: WidgetType
}

const WidgetContainer: React.FC<WidgetContainerProps> = ({ widgetType }) => {
	return (
		<div className="border w-full h-60">
			{
				widgetType === WidgetType.Calendar &&
					<Calendar />
			}
			{
				widgetType === WidgetType.TodoList &&
					<TodoList />
			}
			{
				widgetType === WidgetType.CheckList &&
					<Checklist />
			}
		</div>
	)
}
export default WidgetContainer;

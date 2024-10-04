import React from 'react';
import WidgetContainer, { WidgetType } from '../widgets/WidgetContainer';
const HomeContainer: React.FC = () => {
	return (
		<div className="flex flex-col w-full gap-4 my-4 overflow-y-auto">
			<WidgetContainer widgetType={WidgetType.TodoList} />
			<WidgetContainer widgetType={WidgetType.Calendar} />
			<WidgetContainer widgetType={WidgetType.CheckList} />
			<WidgetContainer widgetType={WidgetType.CheckList} />
			<WidgetContainer widgetType={WidgetType.CheckList} />
		</div>
	)
}
export default HomeContainer;

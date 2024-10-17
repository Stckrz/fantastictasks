import React, { useEffect, useState } from 'react';
import Calendar from './calendar/Calendar';
import TodoList from './todolist/TodoList';
import Checklist from './checklist/CheckList/Checklist';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import { Widget } from '@/models/widgetModels';


interface WidgetContainerProps {
	widget: Widget,
	index: number,
	widget_change: (widget: Widget, direction: string) => void
}

const WidgetContainer: React.FC<WidgetContainerProps> = ({ widget, index, widget_change }) => {
	const [fullScreen, setFullScreen] = useState(false);

	useEffect(() => {
		if (fullScreen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [fullScreen])
	return (
		<div
			className={fullScreen
				? "border w-full h-full left-0 top-0 border-theme z-50 fixed surface-theme"
				: "w-full h-96 border-theme relative flex flex-col surface-theme rounded"}>
			<div
				onClick={() => { setFullScreen(!fullScreen) }}
				className="right-2 absolute top-2 aspect-square flex items-center justify-center text-black"
			>
				{fullScreen
					? <MdFullscreenExit size="2.5em" />
					: <MdFullscreen size="2.5em" className="text-blue-500" />
				}
			</div>
			<div className="absolute left-2 top-2">
				<button onClick={() => { widget_change(widget, "up") }}>up</button>
				<button onClick={() => { widget_change(widget, "down") }}>down</button>
			</div>
			{
				widget.widgetType === 'Calendar' &&
				<Calendar />
			}
			{
				widget.widgetType === 'toDoList' &&
				<TodoList listId={widget.todolist.id} />
			}
			{
				widget.widgetType === 'CheckList' &&
				<Checklist checkList={widget.checklist} />
			}
		</div>
	)
}
export default WidgetContainer;

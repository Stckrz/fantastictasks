import React, { useEffect, useState } from 'react';
import Calendar from './calendar/Calendar';
import TodoList from './todolist/TodoList';
import Checklist from './checklist/Checklist';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

export enum WidgetType {
	Calendar,
	TodoList,
	CheckList,
}

interface WidgetContainerProps {
	widgetType: WidgetType,
	widgetId: number
	itemId: number
}

const WidgetContainer: React.FC<WidgetContainerProps> = ({ widgetType, itemId }) => {
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
				? "border w-full h-full left-0 top-0 border-theme z-50 fixed"
				: "border w-full h-96 border-theme relative flex flex-col"}>
			<div
				onClick={() => { setFullScreen(!fullScreen) }}
				className="right-2 absolute top-2 aspect-square flex items-center justify-center"
			>
				{fullScreen
					? <MdFullscreenExit size="2.5em" />
					: <MdFullscreen size="2.5em" />
				}
			</div>
			{
				widgetType === WidgetType.Calendar &&
				<Calendar />
			}
			{
				widgetType === WidgetType.TodoList &&
				<TodoList listId={itemId} />
			}
			{
				widgetType === WidgetType.CheckList &&
				<Checklist />
			}
		</div>
	)
}
export default WidgetContainer;

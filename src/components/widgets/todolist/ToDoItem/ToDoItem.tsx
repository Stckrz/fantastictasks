import React, { useState } from 'react';
import { update_item_complete_status } from '@/lib/api/todoApi';
import { TodoItemModel } from '@/models/todoModels';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

interface ToDoItemProps {
	item: TodoItemModel
}
const ToDoItem: React.FC<ToDoItemProps> = ({ item }) => {
	const [descriptionShown, setDescriptionShown] = useState(false);
	const [completed, setCompleted] = useState(item.completed);

	const complete_item_handler = async () => {
		const newCompletedStatus = !completed
		setCompleted(newCompletedStatus)
		const updated = await update_item_complete_status(item.id, completed)
		if (!updated) {
			setCompleted(!newCompletedStatus)
		}
	}

	return (
		<div
			key={item.id} className={"flex flex-col border-b border-t border-theme"}
		>
			<div className="flex justify-between h-12 items-center text-xl">
				<div
					onClick={complete_item_handler} >
					{completed
						? <MdOutlineCheckBox size="1.5em"/>
						: <MdOutlineCheckBoxOutlineBlank size="1.5em"/>
					}
				</div>
				<p
					className={completed ? "line-through text-gray-400" : "no-underline"}
					onClick={() => { setDescriptionShown(!descriptionShown) }}>
					{item.title}
				</p>
				<p>{new Date(item.dueDate).toLocaleDateString()}</p>
			</div>
			{descriptionShown &&
				<div>
					{item.description}
				</div>
			}
		</div>
	)
}
export default ToDoItem;

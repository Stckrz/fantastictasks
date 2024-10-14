import { get_items_by_list_id, get_list } from '@/lib/api/todoApi';
import { TodoItemModel, TodoListModel } from '@/models/todoModels';
import React, { useCallback, useEffect, useState } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

interface TodoDisplayProps {
	listId: number,
}
const TodoDisplay: React.FC<TodoDisplayProps> = ({ listId }) => {
	const [listObject, setListObject] = useState<TodoListModel | null>(null);
	const [todoItemArray, setTodoItemArray] = useState<TodoItemModel[] | null>(null);

	const fetch_list = useCallback(async () => {
		const list = await get_list(listId);
		if (list) {
			setListObject(list)
		}
	}, [listId])

	const fetch_list_items = useCallback(async () => {
		const tempArray = await get_items_by_list_id(listId);
		if (tempArray.length > 0) {
			const a = tempArray.sort((a: TodoItemModel, b: TodoItemModel) => {
				const dateA = new Date(a.dueDate).getTime();
				const dateB = new Date(b.dueDate).getTime();
				return dateA - dateB;
			})
			setTodoItemArray(a)
		}
	}, [listId])

	useEffect(() => {
		fetch_list()
		fetch_list_items()
	}, [fetch_list, fetch_list_items])
	return (
		<div className="flex flex-col h-5/6">
			<div>
				{listObject &&
					<div className="flex items-center h-12 justify-center">
						<div className="">{listObject.title}</div>
					</div>
				}
			</div>
			<div className="overflow-y-scroll h-full">
				{todoItemArray !== null
					? todoItemArray.map((item) => {
						return (
							<ToDoItem key={item.id} item={item} />
						)
					})
					: <div>{"No items to display :)"}</div>
				}
			</div>
		</div>
	)
}
export default TodoDisplay;

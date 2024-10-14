import React, { useState } from 'react';
import TodoDisplay from './todoDisplay/TodoDisplay';
import TodoEntry from './todoEntry/TodoEntry';

interface TodoListProps{
	listId: number
}
const TodoList: React.FC<TodoListProps> = ({listId}) => {
	const [entryShown, setEntryShown] = useState(false);
	return (
		<div className="flex flex-col p-2 h-full justify-between">
			{entryShown
				? <TodoEntry setEntryShown={setEntryShown} listId={listId}/>
				: <TodoDisplay listId={listId}/>
			}
			<button
				className="self-end button-theme h-1/6 absolute bottom-2 w-3/12 text-4xl"
				onClick={() => { setEntryShown(!entryShown) }}>
				{"+"}
			</button>
		</div>
	)
}
export default TodoList;

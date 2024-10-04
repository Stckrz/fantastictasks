import React, { useState } from 'react';
import TodoDisplay from './todoDisplay/TodoDisplay';
import TodoEntry from './todoEntry/TodoEntry';
const TodoList: React.FC = () => {
	const [entryShown, setEntryShown] = useState(false);
	return (
		<div className="flex flex-col p-2">
			{entryShown
				? <TodoEntry setEntryShown={setEntryShown} />
				: <TodoDisplay />
			}
			<button
				className="self-end"
				onClick={() => { setEntryShown(!entryShown) }}>
				{"New"}
			</button>
		</div>
	)
}
export default TodoList;

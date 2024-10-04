import React, { SetStateAction, useState } from 'react';
interface TodoEntryProps{
	setEntryShown: React.Dispatch<SetStateAction<boolean>>
}
const TodoEntry: React.FC<TodoEntryProps> = ({setEntryShown}) => {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [date, setDate] = useState("")
	return (
		<div className="flex flex-col gap-2 items-center absolute h-screen w-screen top-0 left-0">
			<button
				className="self-start"
				onClick={() => { setEntryShown(false) }}>
				Cancel
			</button>
			<div className="flex flex-col w-10/12">
				<p>Title: </p>
				<input onChange={e => setTitle(e.target.value)} />
			</div>
			<div className="flex flex-col w-10/12">
				<p>Date: </p>
				<input onChange={e => setDate(e.target.value)} />
			</div>
			<div className="flex flex-col w-10/12">
				<p>Description: </p>
				<input onChange={e => setDescription(e.target.value)} />
			</div>
			<button>Submit</button>
		</div>
	)
}
export default TodoEntry;

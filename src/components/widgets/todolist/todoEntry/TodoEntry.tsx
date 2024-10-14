import { post_item_to_list } from '@/lib/api/todoApi';
import React, { SetStateAction, useEffect, useState } from 'react';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import TimePicker from '@/components/common/timePicker/TimePicker';

interface TodoEntryProps {
	setEntryShown: React.Dispatch<SetStateAction<boolean>>,
	listId: number,
}
const TodoEntry: React.FC<TodoEntryProps> = ({ setEntryShown, listId }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [time, setTime] = useState({
		hour: 0,
		minute: 0
	});
	const [dueDateIso, setDueDateIso] = useState<string | null>(null);
	const [errorMessage, setErrorMessage] = useState<string[]>([""])

	useEffect(() => {
		try {
			if (date !== undefined) {
				const tempDate = new Date(date.getTime());
				tempDate.setHours(time.hour, time.minute)
				setDueDateIso(tempDate.toISOString())
			}
		} catch (error) {
			console.log(error)
		}
	}, [date, time])

	const data_validation_handler = () => {
		const tempArray = []
		if (date === undefined) {
			tempArray.push("Invalid Date")
		}
		if (description === "") {
			tempArray.push("Description is required")
		}
		if (title === "") {
			tempArray.push("Title is required")
		}
		if (tempArray.length > 0) {
			setErrorMessage(tempArray)
		} else {
			todo_item_creation_handler();
		}
	}

	const todo_item_creation_handler = () => {
		if (dueDateIso) {
			post_item_to_list(listId, title, description, dueDateIso)
		}
	}

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
				<p>Description: </p>
				<input onChange={e => setDescription(e.target.value)} />
			</div>
			{dueDateIso != undefined && <div>{new Date(dueDateIso).toLocaleDateString()}</div>}
			<div className="w-10/12 items-start justify-start flex flex-col gap-2">
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={"outline"}
							className={cn(
								"w-[280px] justify-start text-left font-normal",
								!date && "text-muted-foreground"
							)}
						>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{date ? format(date, "PPP") : <span>Pick a date</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={date}
							onDayClick={setDate}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
				<TimePicker setTime={setTime} />
			</div>
			<button onClick={data_validation_handler}>Submit</button>
			{errorMessage.map((item, index) => {
				return (
					<div key={index}>{item}</div>
				)
			})}
		</div>
	)
}
export default TodoEntry;

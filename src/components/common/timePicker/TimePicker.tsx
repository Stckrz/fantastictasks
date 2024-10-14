import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandList,
	CommandGroup,
	CommandItem,
	CommandInput
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import React, { SetStateAction, useEffect, useState } from 'react';

interface hourMinuteObject {
	hour: number,
	minute: number
}
interface TimePickerProps {
	setTime: React.Dispatch<SetStateAction<hourMinuteObject>>
}
const TimePicker: React.FC<TimePickerProps> = ({ setTime }) => {
	const hoursArray = Array.from({ length: 24 }, (_, i) => i + 1);
	const minutesArray = Array.from({ length: 60 }, (_, i) => String(i + 1).padStart(2, '0'));
	const [hour, setHour] = useState("");
	const [minute, setMinute] = useState("");

	useEffect(() => {
		setTime({
			hour: parseInt(hour),
			minute: parseInt(minute)
		})
	}, [hour, minute, setTime])

	return (
		<div className="flex w-full justify-start">
			<div>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={"outline"}
							className={cn(
								"w-[80px] text-center font-normal flex items-center justify-center border-r-transparent"
							)}
						>
							{hour ? `${hour}` : "H"}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Command>
							<CommandInput placeholder={"H"} />
							<CommandList>
								<CommandGroup>
									{hoursArray.map((i) => {
										return (
											<CommandItem
												key={i}
												value={`${i}`}
												onSelect={(currentValue) => {
													setHour(currentValue === hour ? "" : currentValue)
												}}>
												{i}
											</CommandItem>
										)
									})}

								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
			</div>
			<div>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={"outline"}
							className={cn(
								"w-[80px] text-center font-normal flex items-center justify-center border-l-transparent"
							)}
						>
							{minute ? `${minute}` : "M"}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Command>
							<CommandInput placeholder={"M"} />
							<CommandList>
								<CommandGroup>
									{minutesArray.map((i) => {
										return (
											<CommandItem
												key={i}
												value={`${i}`}
												onSelect={(currentValue) => {
													setMinute(currentValue === minute ? "" : currentValue)
												}}>
												{i}
											</CommandItem>
										)
									})}
								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	)
}
export default TimePicker;

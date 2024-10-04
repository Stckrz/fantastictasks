import { TodoItemModel } from '@/models/todoModels';
import React from 'react';
const TodoDisplay: React.FC = () => {
	const tempArray: TodoItemModel[] = [{ title: "some item", description: "this is an item", expirationDate: "12/12/2025" }]
	// const tempArray: TodoItemModel[] = []
	return (
		<>
			{tempArray.length > 0
				? tempArray.map((item, index) => {
					return (
						<div key={index} className="flex flex-col">
							<div className="flex justify-between">
								<p>{item.title}</p>
								<p>{item.expirationDate}</p>
							</div>
							<div>
								{item.description}
							</div>
						</div>
					)
				})
				: <div>{"No items to display :)"}</div>
			}

		</>
	)
}
export default TodoDisplay;

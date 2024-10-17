import { update_checklist_item_complete_status } from '@/lib/api/checkListApi';
import { CheckListItemModel } from '@/models/checklistModels';
import React, { useState } from 'react';

interface CheckListItemProps {
	checkListItem: CheckListItemModel,
}
const CheckListItem: React.FC<CheckListItemProps> = ({ checkListItem }) => {
	const [checked, setChecked] = useState(checkListItem.completed);

	const update_check_handler = async () => {
		const newChecked = !checked;
		setChecked(newChecked);
		const updatedItem = await update_checklist_item_complete_status(checkListItem.id, newChecked);
		if (updatedItem === undefined) {
			setChecked(!newChecked);
		}
	}

	return (
		<div className="flex gap-2 items-center px-2">
			<input 
				className="h-6 w-6" 
				onChange={update_check_handler} type={"checkbox"} checked={checked} />
			<div className="text-xl">{checkListItem.title}</div>
		</div>
	)
}
export default CheckListItem;

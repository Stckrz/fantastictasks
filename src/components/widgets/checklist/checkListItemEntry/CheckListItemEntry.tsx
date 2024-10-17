import { post_checkList_item_to_list } from '@/lib/api/checkListApi';
import { CheckListModel } from '@/models/checklistModels';
import React, { useState } from 'react';
interface CheckListItemEntryProps {
	checkList: CheckListModel,
	fetch_check_list: () => Promise<void>,
}
const CheckListItemEntry: React.FC<CheckListItemEntryProps> = ({ checkList, fetch_check_list }) => {
	const [itemInput, setItemInput] = useState("");

	const new_item_handler = async () => {
		const newItem = await post_checkList_item_to_list(checkList.id, itemInput)
		if (newItem !== undefined) {
			fetch_check_list()
		}
	}

	return (
		<div className="flex w-full gap-2 p-2 justify-between">
			<input className="w-9/12 input-theme" onChange={e => { setItemInput(e.target.value) }} />
			<button className="w-3/12 button-theme" onClick={new_item_handler}>Submit</button>
		</div>
	)
}
export default CheckListItemEntry;

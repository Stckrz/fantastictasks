import { get_items_by_checkList_id } from '@/lib/api/checkListApi';
import { CheckListItemModel, CheckListModel } from '@/models/checklistModels';
import React, { useCallback, useEffect, useState } from 'react';
import CheckListItemEntry from '../checkListItemEntry/CheckListItemEntry';
import CheckListItem from '../checkListItem/CheckListItem';

interface CheckListProps {
	checkList: CheckListModel
}
const Checklist: React.FC<CheckListProps> = ({ checkList }) => {
	const [checkListItems, setCheckListItems] = useState<CheckListItemModel[] | null>(null);

	const fetch_check_list = useCallback(async () => {
		const list = await get_items_by_checkList_id(checkList.id);
		if (list) {
			const sortedList = list.sort((a: CheckListItemModel, b: CheckListItemModel) => Number(a.completed) - Number(b.completed))
			setCheckListItems(sortedList);
		}
	}, [checkList.id]);

	useEffect(() => {
		fetch_check_list();
	}, [checkList, fetch_check_list]);

	return (
		<div className="flex flex-col justify-between h-full w-full p-2">
			<div className="h-5/6 w-full flex flex-col ">
				<div className="text-xl border-b border-theme p-2 items-center flex w-full justify-center">
					{checkList.title}
				</div>
				<div className="flex flex-col gap-2 overflow-auto mt-2">
					{checkListItems && checkListItems.map((item: CheckListItemModel) => {
						return (
							<CheckListItem key={item.id} checkListItem={item} />
						)
					})}
				</div>
			</div>
			<CheckListItemEntry checkList={checkList} fetch_check_list={fetch_check_list} />
		</div>
	)
}
export default Checklist;


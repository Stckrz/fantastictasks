import { Switch } from '@/components/ui/switch';
import { delete_widget_by_id, get_widget_list_by_user_id, update_widget_active_status } from '@/lib/api/widgetApi';
import { Widget } from '@/models/widgetModels';
import React, { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import WidgetListItemView from '../widgetListItemView/WidgetListItemView';

const WidgetList: React.FC = () => {
	const [cookie] = useCookies(['userInfo']);
	const [widgetList, setWidgetList] = useState<Widget[] | null>(null);

	// const delete_widget = async(widget: Widget)=>{
	// 	try{
	// 	const result = await delete_widget_by_id(widget.id);
	// 	console.log(result)
	// 	} catch (error){
	// 		console.log(`error: ${error}`)
	// 	}
	// }
	// const update_active_status_handler = async (widget: Widget) => {
	// 	const newActiveStatus = !widget.active
	// 	await update_widget_active_status(widget.id, newActiveStatus)
	// }

	const user_widget_fetch = useCallback(async () => {
		if (cookie.userInfo?.id) {
			const widgetData = await get_widget_list_by_user_id(cookie.userInfo?.id)
			setWidgetList(widgetData)
		}
	}, [cookie.userInfo?.id])

	useEffect(() => {
		user_widget_fetch()
	}, [user_widget_fetch])
	console.log(widgetList)
	return (
		<div className="w-full">
			{widgetList !== null &&
				widgetList.map((widget) => {
					return (
						<WidgetListItemView widget={widget}/>
					)
				})
			}
		</div>
	)
}
export default WidgetList;

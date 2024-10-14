import React, { useCallback, useEffect, useState } from 'react';
import WidgetContainer, { WidgetType } from '../widgets/WidgetContainer';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { get_widget_list_by_user_id } from '@/lib/api/widgetApi';
import { Widget } from '@/models/widgetModels';
const HomeContainer: React.FC = () => {
	const [cookie] = useCookies(['userInfo']);
	const [widgetList, setWidgetList] = useState<Widget[] | null>(null);

	const user_widget_fetch = useCallback(async () => {
		if (cookie.userInfo?.id) {
			const widgetData = await get_widget_list_by_user_id(cookie.userInfo?.id)
			setWidgetList(widgetData)
		}
	}, [cookie.userInfo?.id])
	console.log(widgetList)

	useEffect(() => {
		user_widget_fetch()
	}, [user_widget_fetch])

	return (
		cookie.userInfo?.user &&
		<div className="flex flex-col w-full gap-4 spacing-medium overflow-y-auto">
			<div className="flex gap-2">
				<Link to="/widgetCreation">
					<button className="button-theme">
						new widget
					</button>
				</Link>
				<Link to="/widgetList">
					<button className="button-theme">
						view widgets
					</button>
				</Link>
			</div>
			{widgetList !== null && widgetList?.map((widget) => {
				return (
					widget.todolist && widget.active &&
					<WidgetContainer widgetType={WidgetType.TodoList} itemId={widget?.todolist?.id} widgetId={widget?.id} />
				)
			})
			}
		</div>
	)
}
export default HomeContainer;

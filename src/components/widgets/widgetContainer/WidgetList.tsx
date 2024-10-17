import { get_widget_list_by_user_id } from '@/lib/api/widgetApi';
import { Widget } from '@/models/widgetModels';
import React, { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import WidgetListItemView from '../widgetListItemView/WidgetListItemView';
import NotLoggedInPage from '@/components/pages/auth/NotLoggedIn';

const WidgetList: React.FC = () => {
	const [cookie] = useCookies(['userInfo']);
	const [widgetList, setWidgetList] = useState<Widget[] | null>(null);

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
		cookie.userInfo?.user 
			? <div className="w-full">
				{widgetList !== null &&
					widgetList.map((widget) => {
						return (
							<WidgetListItemView widget={widget} />
						)
					})
				}
			</div>
			: <NotLoggedInPage />
	)
}
export default WidgetList;

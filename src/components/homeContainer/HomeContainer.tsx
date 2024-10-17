import React, { useCallback, useEffect, useState } from 'react';
import WidgetContainer from '../widgets/WidgetContainer';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { get_widget_list_by_user_id, update_widget_order } from '@/lib/api/widgetApi';
import { Widget } from '@/models/widgetModels';
import LoadingIndicator from '../common/loadingIndicator/LoadingIndicator';

const HomeContainer: React.FC = () => {
	const [cookie] = useCookies(['userInfo']);
	const [widgetList, setWidgetList] = useState<Widget[] | null>(null);

	const user_widget_fetch = useCallback(async () => {
		if (cookie.userInfo?.id) {
			const widgetData = await get_widget_list_by_user_id(cookie.userInfo?.id)
			setWidgetList(widgetData.filter((widget: Widget) => widget.active === true))
		}
	}, [cookie.userInfo?.id])

	const widget_order_change_handler = async (widget: Widget, direction: string) => {
		const widgetIndex = widgetList ? widgetList.findIndex(w => w.id === widget.id) : -1

		if (widgetIndex >= 0 && widgetList !== null) {
			const [removedWidget] = widgetList.splice(widgetIndex, 1)
			switch (direction) {
				case 'up':
					widgetList.splice(widgetIndex - 1, 0, removedWidget)
					break
				case 'down':
					widgetList.splice(widgetIndex + 1, 0, removedWidget)
					break
			}
			for (let i = 0; i < widgetList.length; i++) {
				const currentWidget = widgetList[i]
				await update_widget_order(currentWidget.id, i + 1)
			}
		}
		user_widget_fetch()
	}

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
			<div className="flex flex-col w-full gap-4 overflow-y-auto md:grid md:grid-cols-3">
				{widgetList !== null
					? widgetList?.map((widget, index) => {
						return (
							widget.active &&
							<WidgetContainer key={widget.id} widget={widget} index={index} widget_change={widget_order_change_handler} />
						)
					})
					: <LoadingIndicator />
				}
			</div>
		</div>
	)
}
export default HomeContainer;

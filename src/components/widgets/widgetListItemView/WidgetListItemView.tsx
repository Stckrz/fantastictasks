import { Widget } from "@/models/widgetModels"
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { delete_widget_by_id, update_widget_active_status } from '@/lib/api/widgetApi';
import { useState } from "react";

interface WidgetListItemViewProps {
	widget: Widget
}
const WidgetListItemView: React.FC<WidgetListItemViewProps> = ({ widget }) => {
	const [active, setActive] = useState(widget.active);

	const update_active_status_handler = async (widget: Widget) => {
		const newActiveStatus = !active
		setActive(newActiveStatus)
		const updated = await update_widget_active_status(widget.id, newActiveStatus)
		if (!updated) {
			setActive(!newActiveStatus)
		}
	}

	const delete_widget = async (widget: Widget) => {
		try {
			const result = await delete_widget_by_id(widget.id);
			console.log(result)
		} catch (error) {
			console.log(`error: ${error}`)
		}
	}

	return (
		<div className="border border-theme w-full flex flex-col py-2">
			<div className="mx-2 text-xl">Type: {widget.widgetType}</div>
			<div className="mx-2 text-xl">Title: {widget.todolist?.title}</div>
			<div className="flex items-center space-x-2 mx-2 m-2 justify-between px-2">
				<button className="text-xl button-theme p-1" onClick={() => { delete_widget(widget) }}>Delete</button>
				<div className="flex items-center">
					<Label className="text-xl" htmlFor="active-toggle">Active: </Label>
					<Switch className="scale-150" id="active-toggle" checked={active} onCheckedChange={() => { update_active_status_handler(widget) }} />
				</div>
			</div>
		</div>
	)
}
export default WidgetListItemView;

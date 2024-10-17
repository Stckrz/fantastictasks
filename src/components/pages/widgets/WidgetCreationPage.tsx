import WidgetCreation from '@/components/widgets/widgetCreation/WidgetCreation';
import React from 'react';
import { useCookies } from 'react-cookie';
import NotLoggedInPage from '../auth/NotLoggedIn';
const WidgetCreationPage: React.FC = () => {
	const [cookie] = useCookies(['userInfo']);
	return (
		cookie.userInfo?.user
			? <div className="h-full w-full flex justify-center">
				<WidgetCreation />
			</div>
			: <NotLoggedInPage />
	)
}
export default WidgetCreationPage;

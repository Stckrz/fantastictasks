import React from 'react';
import '@/App.css'
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
const Layout: React.FC = () => {
	return (
		<div className="flex flex-col justify-between h-dvh w-dvw">
			<Navbar />
			<div className="flex flex-grow"><Outlet /></div>
			<Footer />
		</div>
	)
}
export default Layout;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
	Routes, Route,
} from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Home from '@/components/pages/home/Home';
import Layout from '@/components/pages/layout/Layout';
import LoginPage from './components/pages/auth/Login';
import RegisterPage from './components/pages/auth/Register';
import LoggedOutPage from './components/pages/auth/LoggedOut';
import AppearanceConfigPage from './components/pages/appearanceConfigPage/AppearanceConfigPage';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
					<Route path="logout" element={<LoggedOutPage />} />
					<Route path="appearanceConfig" element={<AppearanceConfigPage />} />
				</Route>
			</Routes>
		</Router>
	</StrictMode>,
)

import './App.css'
import {Outlet} from 'react-router-dom';

function App() {

	return (
		<>
			<div>
				<p className="bg-red-950">
					yay tailwind is working
				</p>
			</div>
			<Outlet />
		</>
	)
}

export default App

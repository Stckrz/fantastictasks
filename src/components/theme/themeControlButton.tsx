import { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
const ThemeControlButton: React.FC = () => {
	const { theme, changeTheme } = useContext(ThemeContext);
	return (
		<div className={"bg-theme text-theme"}>
			<div>current theme: {theme}</div>
			<div className="flex gap-2">
				<button className="bg-gray-500 text-white" onClick={() => { changeTheme('dark') }}>dark</button>
				<button className="border-black border text-black" onClick={() => { changeTheme('light') }}>light</button>
				<button className="bg-gray-700 text-white" onClick={() => { changeTheme('catpuccin') }}>catpuccin</button>
				<button className="bg-pink-200 text-black" onClick={() => { changeTheme('pinky') }}>pinky</button>
				<button className="bg-blue-500 text-black" onClick={() => { changeTheme('cool') }}>cool</button>
				<button className="bg-neutral-500 text-black" onClick={() => { changeTheme('warm') }}>warm</button>
			</div>
		</div>
	)
}
export default ThemeControlButton

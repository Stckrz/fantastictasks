import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
	theme: string,
	changeTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: 'light',
	changeTheme: () => { }
});

interface ThemeProviderProps {
	children: ReactNode;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.add(savedTheme);
		}
	}, [])

	const changeTheme = (newTheme: string) => {
		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	}

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import useLocalStorage from '../hooks/useLocalStorage';
import { darkTheme, lightTheme } from '../theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const { getItem, setItem } = useLocalStorage();
	const [mode, setMode] = useState(getItem('mode', 'auto'));
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const isDarkMode = mode === 'auto' ? prefersDarkMode : mode === 'dark';

	const theme = useMemo(() =>
			createTheme(isDarkMode ? darkTheme : lightTheme),
		[isDarkMode]
	);

	const handleThemeChange = (newMode) => {
		setMode(newMode);
		setItem('mode', newMode);
	};

	const themeContextValue = {
		mode,
		isDarkMode,
		setMode: handleThemeChange
	};

	return (
		<ThemeContext.Provider value={ themeContextValue }>
			<MUIThemeProvider theme={ theme }>
				{ children }
			</MUIThemeProvider>
		</ThemeContext.Provider>
	);
};

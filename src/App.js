import React from 'react';
import { Box, Paper, CssBaseline } from '@mui/material';
import { ThemeProvider } from './context/ThemeContext';
import Counter from './components/Counter/Counter';
import ActionLog from './components/ActionLog/ActionLog';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
	return (
		<ThemeProvider>
			<CssBaseline/>
			<Paper
				elevation={ 3 }
				sx={ {
					p: 3,
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				} }
			>
				<Box sx={ { position: 'absolute', top: 16, right: 16, display: 'flex', gap: 1 } }>
					<ActionLog/>
					<ThemeToggle/>
				</Box>
				<Counter/>
			</Paper>
		</ThemeProvider>
	);
}

export default App;

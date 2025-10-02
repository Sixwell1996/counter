import { createTheme } from '@mui/material/styles';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

const commonStyles = {
	typography: {
		fontFamily: '"Inter", "Roboto", sans-serif',
		h1: {
			fontSize: '6rem',
			fontWeight: 700,
			letterSpacing: '-0.02em',
		},
		h6: {
			fontSize: '1.25rem',
			fontWeight: 600,
		},
		body1: {
			fontSize: '1rem',
			lineHeight: 1.6,
		},
		body2: {
			fontSize: '0.875rem',
			lineHeight: 1.4,
		},
		button: {
			fontWeight: 600,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					padding: '8px 16px',
					textTransform: 'none',
					fontWeight: 600,
					fontSize: '0.9375rem',
				},
				contained: {
					boxShadow: 'none',
					'&:hover': {
						boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.12)',
					},
				},
				outlined: {
					borderWidth: '1.5px',
					'&:hover': {
						borderWidth: '1.5px',
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						borderRadius: 10,
						'& fieldset': {
							borderWidth: '1.5px',
						},
						'&:hover fieldset': {
							borderWidth: '1.5px',
						},
						'&.Mui-focused fieldset': {
							borderWidth: '2px',
						},
					},
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					transition: 'all 0.2s ease',
					'&:hover': {
						transform: 'scale(1.05)',
					},
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					borderRadius: 12,
					boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					margin: '2px 4px',
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					margin: '8px 0',
				},
			},
		},
		MuiBadge: {
			styleOverrides: {
				badge: {
					fontWeight: 600,
					padding: '0 6px',
					height: 20,
					minWidth: 20,
				},
			},
		},
	},
	shape: {
		borderRadius: 10,
	},
	shadows: [
		'none',
		'0px 2px 6px rgba(0, 0, 0, 0.08)',
		'0px 4px 12px rgba(0, 0, 0, 0.12)',
		'0px 24px 38px rgba(0, 0, 0, 0.25)',
	],
};

const lightThemeWithCustomization = createTheme({
	...lightTheme,
	...commonStyles,
	palette: {
		mode: 'light',
		primary: {
			main: '#3e3e4a',
			light: '#5a5a68',
			dark: '#2e2e36',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#d3d3db',
			light: '#e1e1e7',
			dark: '#b5b5c0',
			contrastText: '#3e3e4a',
		},
		error: {
			main: '#EF4444',
			light: '#F87171',
			dark: '#DC2626',
		},
		warning: {
			main: '#F59E0B',
			light: '#FBBF24',
			dark: '#D97706',
		},
		info: {
			main: '#3e3e4a',
			light: '#5a5a68',
			dark: '#2e2e36',
		},
		success: {
			main: '#10B981',
			light: '#34D399',
			dark: '#059669',
		},
		background: {
			default: '#f5f5f7',
			paper: '#ffffff',
		},
		text: {
			primary: '#3e3e4a',
			secondary: '#5a5a68',
			disabled: '#a0a0a8',
		},
		divider: '#e0e0e6',
		action: {
			active: '#3e3e4a',
			hover: 'rgba(62, 62, 74, 0.08)',
			selected: 'rgba(62, 62, 74, 0.12)',
			disabled: 'rgba(62, 62, 74, 0.26)',
			disabledBackground: 'rgba(62, 62, 74, 0.12)',
		},
	},
});


const darkThemeWithCustomization = createTheme({
	...darkTheme,
	...commonStyles,
	palette: {
		mode: 'dark',
		primary: {
			main: '#3e3e4a',
			light: '#5a5a68',
			dark: '#2e2e36',
			contrastText: '#ededed',
		},
		secondary: {
			main: '#ededed',
			light: '#ffffff',
			dark: '#c5c5c5',
			contrastText: '#212126',
		},
		error: {
			main: '#F87171',
			light: '#FCA5A5',
			dark: '#EF4444',
		},
		warning: {
			main: '#FBBF24',
			light: '#FCD34D',
			dark: '#F59E0B',
		},
		info: {
			main: '#ededed',
			light: '#ffffff',
			dark: '#c5c5c5',
		},
		success: {
			main: '#34D399',
			light: '#6EE7B7',
			dark: '#10B981',
		},
		background: {
			default: '#212126',
			paper: '#212126',
		},
		text: {
			primary: '#ededed',
			secondary: '#d1d1d5',
			disabled: '#9ca3af',
		},
		divider: '#3e3e4a',
		action: {
			active: '#ededed',
			hover: 'rgba(237, 237, 237, 0.08)',
			selected: 'rgba(237, 237, 237, 0.16)',
			disabled: 'rgba(237, 237, 237, 0.26)',
			disabledBackground: 'rgba(237, 237, 237, 0.12)',
		},
	},
	components: {
		...commonStyles.components,
		MuiButton: {
			styleOverrides: {
				root: {
					...commonStyles.components.MuiButton.styleOverrides.root,
					backgroundColor: '#3e3e4a',
					color: '#ededed',
					'&:hover': {
						backgroundColor: '#4a4a58',
					},
				},
				outlined: {
					borderColor: '#3e3e4a',
					color: '#ededed',
					'&:hover': {
						borderColor: '#5a5a68',
						backgroundColor: 'rgba(62, 62, 74, 0.1)',
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						backgroundColor: '#3e3e4a',
						'& fieldset': {
							borderColor: '#5a5a68',
						},
						'&:hover fieldset': {
							borderColor: '#ededed',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#ededed',
						},
						'& input': {
							color: '#ededed',
						},
					},
					'& .MuiInputLabel-root': {
						color: '#d1d1d5',
					},
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					...commonStyles.components.MuiIconButton.styleOverrides.root,
					color: '#ededed',
					'&:hover': {
						backgroundColor: 'rgba(237, 237, 237, 0.08)',
						transform: 'scale(1.05)',
					},
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					...commonStyles.components.MuiMenuItem.styleOverrides.root,
					'&:hover': {
						backgroundColor: 'rgba(237, 237, 237, 0.08)',
					},
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					...commonStyles.components.MuiMenu.styleOverrides.paper,
					backgroundColor: '#3e3e4a',
				},
			},
		},
	},
});

export { lightThemeWithCustomization as lightTheme, darkThemeWithCustomization as darkTheme };

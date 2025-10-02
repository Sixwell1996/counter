import React, { useState, useContext } from 'react';
import {
	IconButton,
	Menu,
	MenuItem,
	ListItemIcon,
	ListItemText,
	Box
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import CheckIcon from '@mui/icons-material/Check';
import { ThemeContext } from '../../context/ThemeContext';

function ThemeToggle() {
	const { mode, isDarkMode, setMode } = useContext(ThemeContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleThemeChange = (newMode) => {
		setMode(newMode);
		handleMenuClose();
	};

	const getThemeIcon = (themeMode) => {
		switch (themeMode) {
			case 'light':
				return <LightModeIcon/>;
			case 'dark':
				return <DarkModeIcon/>;
			default:
				return <AutoModeIcon/>;
		}
	};

	const menuItems = [
		{ value: 'auto', label: 'Auto', icon: <AutoModeIcon/> },
		{ value: 'light', label: 'Light', icon: <LightModeIcon/> },
		{ value: 'dark', label: 'Dark', icon: <DarkModeIcon/> }
	];

	return (
		<>
			<IconButton
				onClick={ handleMenuOpen }
				size="medium"
				sx={ {
					bgcolor: isDarkMode ? '#3e3e4a' : '#ededed',
					color: isDarkMode ? '#ededed' : '#3e3e4a',
					'&:hover': {
						bgcolor: isDarkMode ? '#4a4a58' : '#d3d3db'
					}
				} }
				aria-label="Chenge theme"
				aria-controls={ open ? "theme-menu" : undefined }
				aria-haspopup="true"
				aria-expanded={ open ? "true" : undefined }
			>
				{ getThemeIcon(mode) }
			</IconButton>

			<Menu
				id="theme-menu"
				anchorEl={ anchorEl }
				open={ open }
				onClose={ handleMenuClose }
				anchorOrigin={ {
					vertical: 'bottom',
					horizontal: 'right',
				} }
				transformOrigin={ {
					vertical: 'top',
					horizontal: 'right',
				} }
				PaperProps={ {
					elevation: 3,
					sx: {
						minWidth: 180,
						borderRadius: '12px',
						mt: 1,
					}
				} }
			>
				{ menuItems.map((item) => (
					<MenuItem
						key={ item.value }
						onClick={ () => handleThemeChange(item.value) }
						selected={ mode === item.value }
						sx={ {
							py: 1.5,
							borderRadius: '8px',
							mx: 0.5,
							'&.Mui-selected': {
								bgcolor: isDarkMode ? 'rgba(237, 237, 237, 0.08)' : 'rgba(62, 62, 74, 0.08)',
							}
						} }
					>
						<ListItemIcon sx={ { minWidth: 40 } }>
							{ item.icon }
						</ListItemIcon>
						<ListItemText>{ item.label }</ListItemText>
						{ mode === item.value && (
							<Box sx={ { ml: 1 } }>
								<CheckIcon fontSize="small" color="primary"/>
							</Box>
						) }
					</MenuItem>
				)) }
			</Menu>
		</>
	);
}

export default ThemeToggle;

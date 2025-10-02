import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography, Box, Badge, Divider } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useCounter from '../../hooks/useCounter';

function ActionLog() {
	const { log } = useCounter();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button
				variant="outlined"
				size="small"
				endIcon={ <ArrowDropDownIcon/> }
				onClick={ handleMenuOpen }
				sx={ { textTransform: 'none' } }
			>
				{ log.length > 0 ? (
					<Badge badgeContent={ log.length } color="primary">
						<span>Story</span>
					</Badge>
				) : (
					"Story"
				) }
			</Button>

			<Menu
				anchorEl={ anchorEl }
				open={ Boolean(anchorEl) }
				onClose={ handleMenuClose }
			>
				<Box sx={ { px: 2, py: 1 } }>
					<Typography variant="subtitle2" color="text.secondary">
						Last actions:
					</Typography>
				</Box>
				<Divider/>
				{ log.length > 0 ? (
					log.map((action, index) => (
						<MenuItem key={ index } dense>
							<Typography variant="body2">
								{ action }
							</Typography>
						</MenuItem>
					))
				) : (
					<MenuItem dense disabled>
						<Typography variant="body2">
							No actions yet
						</Typography>
					</MenuItem>
				) }
			</Menu>
		</>
	);
}

export default ActionLog;

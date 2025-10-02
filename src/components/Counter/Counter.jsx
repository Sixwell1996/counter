import React, { useContext, useState, useEffect } from 'react';
import { Box, Typography, IconButton, Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { ThemeContext } from '../../context/ThemeContext';
import useCounter from '../../hooks/useCounter';
import StepSelector from "../StepSelector/StepSelector";

function Counter() {
	const { count, increment, decrement, reset, min, max, setLimits } = useCounter();
	const { isDarkMode } = useContext(ThemeContext);

	const [minInput, setMinInput] = useState(min === null ? '' : min.toString());
	const [maxInput, setMaxInput] = useState(max === null ? '' : max.toString());

	useEffect(() => {
		setMinInput(min === null ? '' : min.toString());
	}, [min]);

	useEffect(() => {
		setMaxInput(max === null ? '' : max.toString());
	}, [max]);

	const isIncrementDisabled = max !== null && count >= max;
	const isDecrementDisabled = min !== null && count <= min;

	const handleMinChange = (e) => {
		const value = e.target.value;
		setMinInput(value);
		const validMin = value === '' ? null : parseInt(value, 10);
		setLimits(validMin, max);
	};

	const handleMaxChange = (e) => {
		const value = e.target.value;
		setMaxInput(value);
		const validMax = value === '' ? null : parseInt(value, 10);
		setLimits(min, validMax);
	};

	return (
		<Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
			<Box sx={ { display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 } }>
				<IconButton
					onClick={ decrement }
					disabled={ isDecrementDisabled }
					sx={ { fontSize: '2rem', p: 2 } }
				>
					<RemoveIcon fontSize="inherit"/>
				</IconButton>

				<Typography
					variant="h1"
					sx={ {
						mx: 4,
						fontSize: { xs: '5rem', sm: '8rem' },
						fontWeight: 'bold',
						animation: count !== 0 ? 'pulse 0.5s' : 'none',
						'@keyframes pulse': {
							'0%': { transform: 'scale(1)' },
							'50%': { transform: 'scale(1.05)' },
							'100%': { transform: 'scale(1)' },
						},
					} }
				>
					{ count }
				</Typography>

				<IconButton
					onClick={ increment }
					disabled={ isIncrementDisabled }
					sx={ { fontSize: '2rem', p: 2 } }
				>
					<AddIcon fontSize="inherit"/>
				</IconButton>
			</Box>

			<Box sx={ { display: 'flex', alignItems: 'center', gap: 2, mb: 3 } }>
				<TextField
					label="Min"
					type="number"
					value={ minInput }
					onChange={ handleMinChange }
					size="small"
					sx={ { width: '80px' } }
				/>

				<TextField
					label="Max"
					type="number"
					value={ maxInput }
					onChange={ handleMaxChange }
					size="small"
					sx={ { width: '80px' } }
				/>
			</Box>
			<StepSelector/>
			<Button
				variant="contained"
				startIcon={ <RestartAltIcon/> }
				onClick={ reset }
				sx={ {
					borderRadius: 28,
					px: 3,
					mb: 3,
					bgcolor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
					color: isDarkMode ? 'white' : 'black',
					'&:hover': {
						bgcolor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
					}
				} }
			>
				Reset
			</Button>
		</Box>
	);
}

export default Counter;

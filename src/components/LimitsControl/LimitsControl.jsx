import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import useCounter from '../../hooks/useCounter';

function LimitsControl() {
	const { min, max, setLimits } = useCounter();

	const [minInput, setMinInput] = useState(min === null ? '' : min.toString());
	const [maxInput, setMaxInput] = useState(max === null ? '' : max.toString());

	useEffect(() => {
		setMinInput(min === null ? '' : min.toString());
	}, [min]);

	useEffect(() => {
		setMaxInput(max === null ? '' : max.toString());
	}, [max]);

	const handleMinChange = (e) => {
		setMinInput(e.target.value);
	};

	const handleMaxChange = (e) => {
		setMaxInput(e.target.value);
	};

	const handleSetLimits = () => {
		const newMin = minInput === '' ? null : parseInt(minInput, 10);
		const newMax = maxInput === '' ? null : parseInt(maxInput, 10);

		const validMin = minInput === '' ? null : (isNaN(newMin) ? null : newMin);
		const validMax = maxInput === '' ? null : (isNaN(newMax) ? null : newMax);

		setLimits(validMin, validMax);
	};

	return (
		<Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 4 } }>
			<Typography variant="h6">
				Counter Limits
			</Typography>

			<Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
				<TextField
					label="Min"
					type="number"
					value={ minInput }
					onChange={ handleMinChange }
					onKeyDown={ (e) => e.key === 'Enter' && handleSetLimits() }
					size="small"
					sx={ { width: '100px' } }
				/>

				<TextField
					label="Max"
					type="number"
					value={ maxInput }
					onChange={ handleMaxChange }
					onKeyDown={ (e) => e.key === 'Enter' && handleSetLimits() }
					size="small"
					sx={ { width: '100px' } }
				/>

				<Button
					variant="contained"
					onClick={ handleSetLimits }
					size="small"
				>
					Set
				</Button>
			</Box>
		</Box>
	);
}

export default LimitsControl;

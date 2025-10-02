import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import useCounter from '../../hooks/useCounter';

function StepSelector() {
	const { step, setStep } = useCounter();
	const [stepInput, setStepInput] = useState(step.toString());

	useEffect(() => {
		setStepInput(step.toString());
	}, [step]);

	const handleStepChange = (e) => {
		const value = e.target.value;
		setStepInput(value);

		const newStep = parseInt(value, 10);
		if (!isNaN(newStep) && newStep > 0) {
			setStep(newStep);
		}
	};

	return (
		<Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mb: 3 } }>
			<Typography variant="body1">
				Counter Step
			</Typography>
			<Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
				<TextField
					type="number"
					value={ stepInput }
					onChange={ handleStepChange }
					size="small"
					sx={ { width: '80px' } }
					inputProps={ {
						min: 1,
						style: { textAlign: 'center' }
					} }
				/>
			</Box>
		</Box>
	);
}

export default StepSelector;

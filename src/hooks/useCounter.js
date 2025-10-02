import { useState, useCallback, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useCounter() {
	const { getItem, setItem, subscribe } = useLocalStorage();

	const [count, setCountValue] = useState(() => {
		const savedCount = getItem('count', 0);
		return typeof savedCount === 'number' ? savedCount : 0;
	});

	const [step, setStepValue] = useState(() => {
		const savedStep = getItem('step', 1);
		return typeof savedStep === 'number' && savedStep > 0 ? savedStep : 1;
	});

	const [min, setMinValue] = useState(() => {
		const savedMin = getItem('min', null);
		return savedMin !== null && !isNaN(savedMin) ? Number(savedMin) : null;
	});

	const [max, setMaxValue] = useState(() => {
		const savedMax = getItem('max', null);
		return savedMax !== null && !isNaN(savedMax) ? Number(savedMax) : null;
	});

	const [log, setLogValue] = useState(() => getItem('log', []));

	useEffect(() => {
		const handleStorageChange = (key, newValue) => {
			if (key === 'step') {
				const numStep = Number(newValue);
				if (!isNaN(numStep) && numStep > 0) {
					setStepValue(numStep);
				}
			} else if (key === 'count') {
				setCountValue(prev => {
					const numCount = Number(newValue);
					return isNaN(numCount) ? prev : numCount;
				});
			} else if (key === 'min') {
				const numMin = newValue === null ? null : Number(newValue);
				setMinValue(numMin);
			} else if (key === 'max') {
				const numMax = newValue === null ? null : Number(newValue);
				setMaxValue(numMax);
			} else if (key === 'log') {
				setLogValue(newValue);
			}
		};

		return subscribe(handleStorageChange);
	}, [subscribe]);

	const addToLog = useCallback((action) => {
		setLogValue(prevLog => {
			const newLog = [action, ...(Array.isArray(prevLog) ? prevLog : []).slice(0, 4)];
			setItem('log', newLog);
			return newLog;
		});
	}, [setItem]);

	const increment = useCallback(() => {
		setCountValue(prevCount => {
			const numCount = Number(prevCount) || 0;
			const numStep = Number(step) || 1;

			if (max !== null && numCount >= max) return numCount;

			const newCount = numCount + numStep;
			const limitedCount = max !== null ? Math.min(newCount, max) : newCount;

			setItem('count', limitedCount);
			addToLog(`Increased ${numStep}`);
			return limitedCount;
		});
	}, [step, max, setItem, addToLog]);

	const decrement = useCallback(() => {
		setCountValue(prevCount => {
			const numCount = Number(prevCount) || 0;
			const numStep = Number(step) || 1;

			if (min !== null && numCount <= min) return numCount;

			const newCount = numCount - numStep;
			const limitedCount = min !== null ? Math.max(newCount, min) : newCount;

			setItem('count', limitedCount);
			addToLog(`Decreased ${numStep}`);
			return limitedCount;
		});
	}, [step, min, setItem, addToLog]);

	const reset = useCallback(() => {
		setCountValue(0);
		setItem('count', 0);

		setStepValue(1);
		setItem('step', 1);

		setMinValue(null);
		setMaxValue(null);
		setItem('min', null);
		setItem('max', null);

		addToLog("Counter reset");
	}, [setItem, addToLog]);

	const setCount = useCallback((value) => {
		const numValue = Number(value);
		if (isNaN(numValue)) return;

		let limitedCount = numValue;
		if (max !== null) limitedCount = Math.min(limitedCount, max);
		if (min !== null) limitedCount = Math.max(limitedCount, min);

		setCountValue(limitedCount);
		setItem('count', limitedCount);
		addToLog(`Step changed to ${limitedCount}`);
	}, [max, min, setItem, addToLog]);

	const setStep = useCallback((newStep) => {
		const numStep = Number(newStep);

		if (isNaN(numStep) || numStep <= 0) return;

		setStepValue(numStep);
		setItem('step', numStep);
		addToLog(`Step changed to ${numStep}`);
	}, [setItem, addToLog]);

	const setLimits = useCallback((newMin, newMax) => {

		const numMin = newMin === null || newMin === '' ? null : Number(newMin);
		const numMax = newMax === null || newMax === '' ? null : Number(newMax);

		const safeMin = numMin === null || isNaN(numMin) ? null : numMin;
		const safeMax = numMax === null || isNaN(numMax) ? null : numMax;

		if (safeMin !== null && safeMax !== null && safeMin > safeMax) {
			return;
		}

		setMinValue(safeMin);
		setMaxValue(safeMax);
		setItem('min', safeMin);
		setItem('max', safeMax);

		setCountValue(prevCount => {
			const numCount = Number(prevCount) || 0;

			if (safeMax !== null && numCount > safeMax) {
				setItem('count', safeMax);
				addToLog(`Value limited to ${safeMax}`);
				return safeMax;
			}

			if (safeMin !== null && numCount < safeMin) {
				setItem('count', safeMin);
				addToLog(`Value limited to ${safeMin}`);
				return safeMin;
			}

			return numCount;
		});
	}, [setItem, addToLog]);

	return {
		count,
		step,
		min,
		max,
		log: Array.isArray(log) ? log : [],
		increment,
		decrement,
		reset,
		setCount,
		setStep,
		setLimits
	};
}

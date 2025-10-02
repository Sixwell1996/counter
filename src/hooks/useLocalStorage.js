export default function useLocalStorage() {

	const getItem = (key, defaultValue) => {
		try {
			const item = window.localStorage.getItem(key);

			if (item === null || item === undefined || item === 'undefined' || item === 'null') {
				return defaultValue;
			}

			try {
				const parsed = JSON.parse(item);
				return parsed;
			} catch (e) {
				return item;
			}
		} catch (error) {
			console.error(`Error while reading ${ key }:`, error);
			return defaultValue;
		}
	};

	const setItem = (key, value) => {
		try {
			if (value === undefined) {
				window.localStorage.removeItem(key);
				setTimeout(() => dispatchStorageEvent(key, null), 0);
			} else {
				window.localStorage.setItem(key, JSON.stringify(value));
				setTimeout(() => dispatchStorageEvent(key, value), 0);
			}
		} catch (error) {
			console.error(`Error while  saving ${ key }:`, error);
		}
	};

	const dispatchStorageEvent = (key, newValue) => {
		window.dispatchEvent(new CustomEvent('local-storage', {
			detail: { key, newValue }
		}));
	};

	const subscribe = (callback) => {
		const handleStorageChange = (e) => {
			if (e.detail) {
				callback(e.detail.key, e.detail.newValue);
			}
		};

		window.addEventListener('local-storage', handleStorageChange);

		return () => {
			window.removeEventListener('local-storage', handleStorageChange);
		};
	};

	return { getItem, setItem, subscribe };
}

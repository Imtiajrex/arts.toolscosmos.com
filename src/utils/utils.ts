export const createLoadObserver = (handler: () => void, loading: () => void) => {
	let waiting = 0;

	const onload = (el: { addEventListener: (arg0: string, arg1: () => void) => void }) => {
		waiting++;
		loading();
		el.addEventListener('load', () => {
			waiting--;
			if (waiting === 0) {
				handler();
			}
		});
	};

	return onload;
};

<script>
	// @ts-nocheck

	import { getContext } from 'svelte';

	const timer = getContext('timer');
	let timerValue = getContext('timer-value');
	const focus = getContext('focus');
	const practice = getContext('practice');
	const imageLoading = getContext('image-loading');
	$: if ($timer != '') {
		$timerValue = $timer;
	}
	$: minutes = Math.floor(Number($timerValue) / 60);
	$: seconds = Math.floor(Number($timerValue) - minutes * 60);
	let timerInverval;
	practice.subscribe((value) => {
		if (value) {
			timerInverval = setInterval(() => {
				if (!$imageLoading && $timerValue > 0) $timerValue -= 1;
			}, 1000);
		} else {
			if (timerInverval) {
				clearInterval(timerInverval);
			}
			$timerValue = $timer;
		}
	});
</script>

<div
	class={'flex items-center justify-center max-w-md p-2 md:p-5 bg-slate-100 rounded-lg z-20 absolute -top-5 shadow-md right-1/2  w-1/4 h-10 translate-y-1/2 translate-x-1/2'}
>
	<h3 class="text-black text-xl md:text-4xl ">
		<span class="countdown ">
			<span style="--value:{minutes};" />
		</span>

		<span class="">:</span>
		<span class="countdown ">
			<span style="--value:{seconds};" />
		</span>
	</h3>
</div>

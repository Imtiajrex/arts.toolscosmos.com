<script>
	// @ts-nocheck

	import { getContext } from 'svelte';

	const timer = getContext('timer');
	const focus = getContext('focus');
	const practice = getContext('practice');
	$: minutes = Math.floor(Number($timer) / 60);
</script>

<div
	class={'flex items-center justify-center max-w-md p-5 bg-slate-100 rounded-lg z-20 absolute -top-5 shadow-md right-1/2  w-1/4 h-10 translate-y-1/2 translate-x-1/2'}
>
	<h3 class=" text-4xl">{minutes}:00</h3>
</div>

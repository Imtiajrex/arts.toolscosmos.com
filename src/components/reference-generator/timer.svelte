<script>
	// @ts-nocheck

	import { getContext } from 'svelte';

	const timer = getContext('timer');
	const minutes = (time) => Math.floor(Number(time) / 60);
</script>

<div class="flex items-center justify-center max-w-md w-full h-full bg-slate-100 rounded-lg m-3">
	<h3 class=" text-4xl">{minutes($timer)}:00</h3>
</div>

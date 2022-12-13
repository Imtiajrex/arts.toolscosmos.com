<script>
	// @ts-nocheck

	import Reference from './reference.svelte';
	import Timer from './timer.svelte';
	import { getContext } from 'svelte';
	let practice = getContext('practice');
	let focus = getContext('focus');
	$: containerClass = $focus && $practice ? 'h-full pt-8' : 'h-3/4';
</script>

<div class={'flex relative items-center justify-center pt-5 gap-4 w-full ' + containerClass}>
	<Timer />
	<Reference />
</div>

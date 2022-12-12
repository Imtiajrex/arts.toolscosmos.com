<script>
	import Reference from './reference.svelte';
	import Timer from './timer.svelte';
	import { createApi } from 'unsplash-js';
	import { getContext } from 'svelte';
	const accessKey = '1gKY8v4RLY3MYO-vlTQ2XMc690yydp_O3thxXxsfaNM';
	// const unsplash = createApi({
	// 	accessKey: accessKey,
	// 	fetch
	// });
	// unsplash.photos
	// 	.getRandom({ count: 1 })
	// 	.then((result) => {
	// 		if (result.errors) {
	// 			console.log('error occurred: ', result.errors[0]);
	// 		} else {
	// 			console.log(result.response);
	// 		}
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
	let practice = getContext('practice');
	let focus = getContext('focus');
	$: containerClass = $focus && $practice ? 'h-full pt-8' : 'h-3/4';
</script>

<div class={'flex relative items-center justify-center pt-5 gap-4 w-full ' + containerClass}>
	<Timer />
	<Reference />
</div>

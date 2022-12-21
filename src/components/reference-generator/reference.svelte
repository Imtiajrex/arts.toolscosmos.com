<script>
	// @ts-nocheck

	import Imageplaceholder from '../lib/imageplaceholder.svelte';
	import { createApi } from 'unsplash-js';
	import { getContext } from 'svelte';
	import Image from '../lib/image.svelte';
	const accessKey = '1gKY8v4RLY3MYO-vlTQ2XMc690yydp_O3thxXxsfaNM';
	const unsplash = createApi({
		accessKey
	});
	let practice = getContext('practice');
	let focus = getContext('focus');
	let draw = getContext('draw');
	let timer = getContext('timer');
	let timerValue = getContext('timer-value');
	let currentRef = getContext('current-ref');

	let references = [];

	const fetchRefs = async () => {
		const data = await unsplash.search.getPhotos({
			query: $draw,
			page: 1,
			perPage: 100,
			orderBy: 'relevant'
		});
		references = data.response.results;
		changeRef();
		// generate random number between 0 and length of references
	};
	practice.subscribe((value) => {
		if (value) {
			fetchRefs();
		} else {
			references = [];
			$currentRef = null;
		}
	});

	$: containerClass = $practice && $focus ? 'mb-10' : 'p-10 xs:p-5';
	$: if ($timerValue == 0) {
		changeRef();
	}
	const changeRef = () => {
		const random = Math.floor(Math.random() * references.length);

		$currentRef = references[random];
		$timerValue = $timer;
	};
</script>

<div
	class={'flex items-center justify-center flex-col relative w-full h-full bg-black rounded-lg mr-0 ' +
		containerClass}
	style={$practice && $focus && 'height:88vh'}
>
	{#if $practice}
		{#if $currentRef}
			<Image
				src={$currentRef.urls.regular}
				alt={$currentRef.alt_description}
				className={'h-full w-full object-contain'}
			/>
		{/if}
	{:else}
		<Imageplaceholder />
	{/if}
	<button class="btn btn-warning absolute z-50 bottom-2 " on:click={changeRef}> Change </button>
</div>

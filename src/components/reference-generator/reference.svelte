<script>
	// @ts-nocheck

	import Imageplaceholder from '../lib/imageplaceholder.svelte';
	import { createApi } from 'unsplash-js';
	import { getContext } from 'svelte';
	import Image from '../lib/image.svelte';

	const accessKey = '1gKY8v4RLY3MYO-vlTQ2XMc690yydp_O3thxXxsfaNM';
	let practice = getContext('practice');
	let focus = getContext('focus');
	let draw = getContext('draw');
	let timer = getContext('timer');

	let references = [];
	let currentRef = null;

	const unsplash = createApi({
		accessKey
	});
	const fetchRefs = async () => {
		const data = await unsplash.search.getPhotos({
			query: $draw,
			page: 1,
			perPage: 30,
			orderBy: 'relevant'
		});
		references = data.response.results;
		currentRef = references[0];

		console.log('ran', data);
	};
	practice.subscribe((value) => {
		if (value) {
			fetchRefs();
		} else {
			references = [];
			currentRef = null;
		}
	});

	$: containerClass = $practice && $focus ? 'mb-10' : 'p-10 xs:p-5';
</script>

<div
	class={'flex items-center justify-center w-full h-full bg-black rounded-lg mr-0 ' +
		containerClass}
	style={$practice && $focus && 'height:88vh'}
>
	{#if $practice}
		{#if currentRef}
			<Image
				src={currentRef.urls.regular}
				alt={currentRef.alt_description}
				className={'h-full w-full object-contain'}
			/>
		{/if}
	{:else}
		<Imageplaceholder />
	{/if}
</div>

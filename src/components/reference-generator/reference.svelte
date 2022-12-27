<script>
	// @ts-nocheck

	import Imageplaceholder from '../lib/imageplaceholder.svelte';
	import { createApi } from 'unsplash-js';
	import { getContext, onMount } from 'svelte';
	import Image from '../lib/image.svelte';
	const accessKey = '1gKY8v4RLY3MYO-vlTQ2XMc690yydp_O3thxXxsfaNM';
	const unsplash = createApi({
		accessKey
	});
	const imagePerPage = 30;
	let practice = getContext('practice');
	let focus = getContext('focus');
	let draw = getContext('draw');
	let timer = getContext('timer');
	let timerValue = getContext('timer-value');
	let currentRef = getContext('current-ref');
	let page = 1;

	let references = [];

	let onServer = true;
	onMount(() => {
		onServer = false;
	});
	const updatePageRef = (value) => {
		if (value && !onServer) {
			page = Number(localStorage.getItem(`page-${value}`) || 1);
			$currentRef = Number(localStorage.getItem(`current-ref-${value}`) || '0');
			console.log($currentRef);
		}
	};
	draw.subscribe(updatePageRef);
	practice.subscribe((val) => val && updatePageRef($draw));
	$: if (!onServer && $draw && $practice) {
		localStorage.setItem(`page-${$draw}`, page);
	}
	currentRef.subscribe((val) => {
		if (!onServer && $draw && $practice && $currentRef) {
			localStorage.setItem(
				`current-ref-${$draw}`,
				JSON.stringify(val > 30 ? val - (val % imagePerPage) * 30 : val)
			);
		}
	});
	let fetching = false;
	const fetchRefs = async () => {
		fetching = true;
		console.log('fetching refs', page, $draw, $currentRef);
		const data = await unsplash.search.getPhotos({
			query: $draw,
			page,
			perPage: imagePerPage,
			orderBy: 'relevant'
		});
		references = [...references, ...data.response.results];
		fetching = false;
		changeRef();
		// generate random number between 0 and length of references
	};
	practice.subscribe((value) => {
		if (value) {
			fetchRefs(($currentRef % imagePerPage) + 1);
		} else {
			references = [];
			$currentRef = null;
		}
	});

	$: containerClass = $practice && $focus ? 'mb-10' : 'p-10 xs:p-5';
	$: if ($timerValue == 0 && $practice) {
		changeRef();
	}
	const changeRef = async () => {
		if (fetching) return;
		if ($currentRef == references.length - 1) {
			page = page + 1;
			await fetchRefs();
			return;
		}
		$currentRef = $currentRef + 1;
		$timerValue = $timer;
	};
	$: src = references.length > 0 && references[$currentRef].urls.regular;
	$: alt = 'reference image';
</script>

<div
	class={'flex items-center justify-center flex-col relative w-full h-full bg-black rounded-lg mr-0 ' +
		containerClass}
	style={$practice && $focus && 'height:88vh'}
>
	{#if $practice}
		{#if references.length > 0}
			<Image {src} {alt} className={'h-full w-full object-contain'} />
		{/if}
	{:else}
		<Imageplaceholder />
	{/if}
	<button
		class="btn btn-warning absolute z-50 bottom-2 text-xs  btn-sm md:btn-md"
		on:click={changeRef}
	>
		Change
	</button>
</div>

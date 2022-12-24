<script lang="ts">
	//@ts-nocheck
	import { getContext } from 'svelte';

	import Imageplaceholder from './imageplaceholder.svelte';

	export let src: string;
	export let alt: string;
	export let className: string | undefined;
	let imageLoading = getContext('image-loading');

	const loadImage = () => {
		console.log('image loading');
		$imageLoading = true;
		const img = new Image();
		img.src = src;
		img.onload = () => {
			$imageLoading = false;
		};
	};

	$: if (src != '') loadImage();
</script>

{#if $imageLoading}
	<Imageplaceholder />
{:else}
	<img {src} {alt} class={`${className} ${$imageLoading ? 'hidden' : ''}`} />
{/if}

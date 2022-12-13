<script lang="ts">
	import { createLoadObserver } from '../../utils/utils';
	import Imageplaceholder from './imageplaceholder.svelte';

	export let src: string;
	export let alt: string;
	export let className: string | undefined;
	let imgLoading = false;
	const onload = createLoadObserver(
		() => {
			imgLoading = false;
		},
		() => {
			imgLoading = true;
		}
	);
</script>

{#if imgLoading}
	<Imageplaceholder />
{/if}

<img use:onload {src} {alt} class={`${className} ${imgLoading ? 'hidden' : ''}`} />

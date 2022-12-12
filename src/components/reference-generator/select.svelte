<script>
	// @ts-nocheck

	import { getContext } from 'svelte';
	export let items;
	export let name;
	let value = getContext(name);
	export let title;
</script>

<select class="select select-bordered" bind:value={$value}>
	<option disabled value="">Pick {title}</option>
	{#each items as item}
		<option value={item.value}>{item.name}</option>
	{/each}
</select>

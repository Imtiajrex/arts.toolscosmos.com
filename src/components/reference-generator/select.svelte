<script>
	// @ts-nocheck

	import { Label, Select } from 'flowbite-svelte';
	import { getContext } from 'svelte';
	export let items;
	export let name;
	let value = getContext(name);
	export let title;
	export let className = `mx-3`;
</script>

<div class={`${className}`}>
	<Label>
		{title}
		<Select class="w-48" {items} bind:value={$value} placeholder={`Select a ${title}`} />
	</Label>
</div>

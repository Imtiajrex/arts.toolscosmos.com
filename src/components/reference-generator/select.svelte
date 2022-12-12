<script>
	// @ts-nocheck

	import { Label, Select } from 'flowbite-svelte';
	import { getContext } from 'svelte';
	export let items;
	export let name;
	let value = getContext(name);
	export let title;
</script>

<Label class="w-full">
	{title}
	<Select {items} bind:value={$value} placeholder={`Select a ${title}`} />
</Label>

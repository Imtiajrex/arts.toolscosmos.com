<script lang="ts">
	import { Label, Select } from 'flowbite-svelte';
	export let items: { value: string; name: string }[];
	export let value: string;
	export let title: string;
	export let className: string = `mx-3`;
</script>

<div class={`${className}`}>
	<Label>
		{title}
		<Select class="w-48" {items} bind:value placeholder={`Select a ${title}`} />
	</Label>
</div>

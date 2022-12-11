<script>
	import { Button } from 'flowbite-svelte';
	import { getContext } from 'svelte';
	import Select from './select.svelte';

	let timer = getContext('timer');
	let draw = getContext('draw');
	let referenceTypes = [
		{ value: 'hand', name: 'Hand' },
		{ value: 'object', name: 'Object' },
		{ value: 'model', name: 'Model' }
	];
	let timerOptions = [
		{ value: `${60}`, name: '1 minute' },
		{ value: `${2 * 60}`, name: '2 minutes' },
		{ value: `${5 * 60}`, name: '5 minutes' },
		{ value: `${10 * 60}`, name: '10 minutes' },
		{ value: `${15 * 60}`, name: '15 minutes' },
		{ value: `${30 * 60}`, name: '30 minutes' },
		{ value: `${45 * 60}`, name: '45 minutes' },
		{ value: `${60 * 60}`, name: '60 minutes' }
	];
</script>

<div class="flex items-end justify-between w-full">
	<div class="flex items-center">
		<Select items={referenceTypes} title="Reference Type" name="draw" />
		<Select items={timerOptions} title="Timer" name="timer" />
	</div>
	<Button class="max-h-12 w-32">Start Practice</Button>
</div>

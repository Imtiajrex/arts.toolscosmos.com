<script>
	// @ts-nocheck

	import { getContext } from 'svelte';
	import Select from './select.svelte';
	let focus = getContext('focus');
	const practice = getContext('practice');
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
	const togglePractice = () => {
		$practice = !$practice;
	};
	$: textColor = $practice && $focus ? 'text-slate-100' : 'text-gray-900';
	$: buttonText = $practice ? 'Stop' : 'Start';
	$: buttonClass = $practice && 'btn-error';
	$: focusClass = $practice && $focus ? 'justify-between w-full' : 'justify-between md:justify-end';
</script>

<div
	class={`flex items-center justify-between w-full my-3 md:my-7 flex-col md:flex-row  md:items-end`}
>
	{#if !($practice && $focus)}
		<div class="flex items-center gap-3 flex-col md:flex-row w-full ">
			<Select items={referenceTypes} title="Reference Type" name="draw" className={textColor} />
			<Select items={timerOptions} title="Timer" name="timer" className={textColor} />
		</div>
	{/if}
	<div class={'flex items-center mt-5 md:mt-0 w-full ' + focusClass}>
		<label class={`cursor-pointer label mr-3`}>
			<span class={`label-text mr-2 ${textColor}`}>Focused</span>
			<input type="checkbox" bind:checked={$focus} class="toggle toggle-primary" />
		</label>
		<button class={`btn max-h-12 w-36 ${buttonClass}`} on:click={togglePractice}
			>{buttonText} Practice</button
		>
	</div>
</div>

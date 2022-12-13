<script>
	// @ts-nocheck

	import { getContext } from 'svelte';
	import Select from './select.svelte';
	let focus = getContext('focus');
	const practice = getContext('practice');
	let draw = getContext('draw');
	let timer = getContext('timer');
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
	$: containerClass =
		$focus && $practice
			? 'md:max-w-5xl max-w-3xl p-5 md:p-3  absolute bottom-0 left-1/2 transform -translate-x-1/2 -trasnlate-y-1/2'
			: 'my-3 md:my-7';
</script>

<div
	class={`flex items-center z-50 justify-between w-full flex-col md:flex-row  md:items-end ` +
		containerClass}
>
	{#if !($practice && $focus)}
		<div class="flex items-center gap-3 flex-col md:flex-row w-full ">
			<Select items={referenceTypes} title="Reference Type" name="draw" />
			<Select items={timerOptions} title="Timer" name="timer" />
		</div>
	{/if}
	<div class={'flex items-center mt-5 md:mt-0 w-full ' + focusClass}>
		<label class={`cursor-pointer label mr-3`}>
			<span class={`label-text mr-2 ${textColor}`}>Focused</span>
			<input type="checkbox" bind:checked={$focus} class="toggle toggle-primary" />
		</label>
		<button
			class={`btn max-h-12 w-36 ${buttonClass}`}
			on:click={togglePractice}
			disabled={$draw.length == 0 || $timer.length == 0}>{buttonText} Practice</button
		>
	</div>
</div>

<script>
	// @ts-nocheck

	import { getContext } from 'svelte';
	import Select from './select.svelte';
	let focus = getContext('focus');
	const practice = getContext('practice');
	let draw = getContext('draw');
	let timer = getContext('timer');
	let referenceTypes = [
		'Portrait',
		'Human',
		'Human Nose',
		'Human Ear',
		'Human Body',
		'Perspective',
		'Mammal',
		'Fish',
		'Reptile',
		'Bird'
	].map((type) => {
		return { value: type.toLowerCase(), name: type };
	});
	let timerOptions = [1, 2, 5, 15, 30, 45, 60].map((time) => {
		return { value: time * 60, name: time + ' min' };
	});
	const togglePractice = () => {
		$practice = !$practice;
	};
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
			<span class={`label-text mr-2 text-sm md:text-md`}>Focused</span>
			<input
				type="checkbox"
				bind:checked={$focus}
				class="toggle toggle-primary toggle-sm md:toggle-md"
			/>
		</label>
		<button
			class={`btn btn-primary max-h-12 w-36 btn-sm md:btn-md  ${buttonClass}`}
			on:click={togglePractice}
			disabled={$draw.length == 0 || $timer.length == 0}>{buttonText} Practice</button
		>
	</div>
</div>

<script>
	import ReferenceContainer from '../../components/reference-generator/reference-container.svelte';
	import OptionForm from '../../components/reference-generator/optionForm.svelte';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	let practice = writable(false);
	let focus = writable(true);
	setContext('timer', writable(''));
	setContext('timer-value', writable(''));
	setContext('draw', writable(''));
	setContext('focus', focus);
	setContext('practice', practice);
	setContext('image-loading', writable(false));
	setContext('current-ref', writable(0));
	const focusClass =
		'h-screen w-screen p-5 md:p-3 bg-base-300 fixed z-20 top-0 left-0 flex items-center justify-center flex flex-col items-center justify-center mx-auto';
	const defaultClass = 'container h-screen flex flex-col justify-center  mx-auto  ';
	$: containerClass = $focus && $practice ? focusClass : defaultClass;
	$: wrapperClass = $focus && $practice ? 'flex-col-reverse' : 'flex-col';
</script>

<div class={containerClass}>
	<div class={'flex h-full w-full mx-auto ' + wrapperClass}>
		<OptionForm />
		<ReferenceContainer />
	</div>
</div>

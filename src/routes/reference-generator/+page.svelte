<script>
	import ReferenceContainer from '../../components/reference-generator/reference-container.svelte';
	import OptionForm from '../../components/reference-generator/optionForm.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	let practice = writable(false);
	let focus = writable(true);
	setContext('timer', writable(''));
	setContext('draw', writable(''));
	setContext('focus', focus);
	setContext('practice', practice);

	const focusClass =
		'h-screen fixed w-screen bg-gray-900 z-20 top-0 left-0 flex items-center justify-center flex flex-col items-center justify-center mx-auto';
	const defaultClass = 'h-screen flex flex-col justify-center max-w-7xl mx-auto  ';
	$: containerClass = $focus && $practice ? focusClass : defaultClass;
	$: wrapperClass = $focus && $practice ? 'flex-col-reverse' : 'flex-col';
</script>

<div class={containerClass}>
	<div class={'flex h-full w-full mx-auto md:max-w-5xl max-w-3xl  p-5 md:p-3 ' + wrapperClass}>
		<OptionForm />
		<ReferenceContainer />
	</div>
</div>

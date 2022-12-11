<script>
	import ReferenceContainer from '../../components/reference-generator/reference-container.svelte';
	import OptionForm from '../../components/reference-generator/optionForm.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	let timer = writable('0');
	let draw = writable('');
	setContext('timer', timer);
	setContext('draw', draw);
</script>

<div class="flex flex-col justify-center max-w-7xl mx-auto mt-14 ">
	<OptionForm />
	<ReferenceContainer />
</div>

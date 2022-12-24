<script>
	import { ArrowRight, Phone } from 'svelte-heros-v2';
	import BgGradient from '../lib/bg-gradient.svelte';
	import Alltools from './alltools.svelte';
</script>

<div class="relative px-6 lg:px-8 container mx-auto">
	<div class="pt-20 pb-32 sm:pt-48 sm:pb-40 text-left">
		<h1 class="text-md font-bold tracking-tight sm:text-4xl">
			Practice Tools for Creativity & Productivity
		</h1>
		<p class="mt-6 text-md leading-8 text-gray-400 ">
			Explore our selection of top-quality practice tools and resources
		</p>
		<Alltools />
	</div>
	<BgGradient />
</div>

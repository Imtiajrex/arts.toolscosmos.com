<script>
	import Tool from './tool.svelte';

	const tools = [
		{
			title: 'Art Ref Generator',
			description: 'Generate references for your art.',
			link: '/reference-generator',
			bg: 'bg-emerald-600'
		}
	];
</script>

<div class="my-32">
	<div class=" items-center  py-14 sm:py-18 lg:max-w-7xl">
		<div>
			<h2 class="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
				Tools to help you grow
			</h2>
			<p class="mt-4 text-gray-400">
				<!-- write a short description of the tools you offer -->
				We offer a variety of tools to help you work on your art. From reference generators to color
				palettes, we have you covered.
			</p>
		</div>
	</div>
	<div class="cards lg:max-w-7xl ">
		{#each tools as tool}
			<Tool {...tool} />
		{/each}
	</div>
</div>

<script>
	import Tool from './tool.svelte';

	const tools = [
		{
			title: 'Reference Generator',
			description: 'Generate references for your art.',
			link: '/reference-generator'
		}
	];
</script>

<div class="my-24  min-h-screen ">
	<div class="mx-auto max-w-2xl  items-center   py-14 px-4 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
		<div>
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Tools to help you grow
			</h2>
			<p class="mt-4 text-gray-500">
				<!-- write a short description of the tools you offer -->
				We offer a variety of tools to help you work on your art. From reference generators to color
				palettes, we have you covered.
			</p>
		</div>
	</div>
	<div class="cards mx-auto max-w-2xl  lg:max-w-7xl px-4 sm:px-6 ">
		{#each tools as tool}
			<Tool {...tool} />
		{/each}
	</div>
</div>

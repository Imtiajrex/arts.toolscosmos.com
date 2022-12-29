<script>
	import { ChevronRight, PaintBrush } from 'svelte-heros-v2';
	import Tool from './tool.svelte';
	const tools = [
		{
			title: 'Art Ref Generator',
			description: 'Generate references for your art.',
			Icon: PaintBrush,
			link: '/tools/arts/reference-generator',
			bg: 'bg-emerald-600'
		}
	];
</script>

<div class="container mx-auto mt-24">
	<h2 class="text-lg md:text-3xl font-bold">Featured Tools</h2>
	<div class="carousel carousel-center rounded-box my-5 py-5w-full gap-3">
		{#each tools as tool}
			<Tool {...tool} />
		{/each}
	</div>
</div>

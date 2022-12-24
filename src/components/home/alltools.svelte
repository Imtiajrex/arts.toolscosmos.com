<script lang="ts">
	import { ArrowRight, PaintBrush } from 'svelte-heros-v2';

	const tools = [
		{
			title: 'Arts Tools',
			description: 'Discover the Best Tools for Your Artistic Needs',
			Icon: PaintBrush,
			link: '/tools/arts',
			toolCount: 1,
			bg: 'bg-amber-600'
		},
		{
			title: 'Developer Tools',
			description: 'Elevate Your Development Skills with the Right Tools',
			Icon: PaintBrush,
			link: '/tools/dev',
			toolCount: 1,
			bg: 'bg-cyan-600'
		}
	];
</script>

<div class="carousel carousel-center rounded-box my-5 w-full gap-5">
	{#each tools as { title, description, Icon, link, toolCount, bg }}
		<a
			href={link}
			class={'carousel-item w-52 rounded-md p-4 h-32 pt-4 flex-col transition hover:scale-105 focus:scale-95 ' +
				bg}
		>
			<div class="flex justify-between items-center max-h-10 w-full">
				<div class=" w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
					<Icon size={'17px'} />
				</div>
				<div class="badge p-3 text-xs">{toolCount} tools</div>
			</div>
			<div class="flex items-center justfiy-between">
				<div>
					<h3 class="my-2 text-white font-bold text-md">
						{title}
					</h3>
					<p class="text-gray-100 text-xs">
						{description}
					</p>
				</div>
				<ArrowRight size={'30px'} color="#fff" />
			</div>
		</a>
	{/each}
</div>

<script lang="ts">
	import { PaintBrush } from 'svelte-heros-v2';
	export let title: string;
	export let description: string;
	export let Icon: ConstructorOfATypedSvelteComponent | undefined = PaintBrush;
	export let link: string;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="flex flex-col items-center pb-4">
		<div
			class="rounded-full w-24 h-24 mb-4 bg-gradient-to-r from-orange-500 to-pink-500 flex justify-center items-center relative"
		>
			<Icon size="40" class="text-white" />
		</div>
		<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
		<span class="text-sm text-gray-500 dark:text-gray-400">{description}</span>
		<div class="flex mt-4 space-x-3 lg:mt-6">
			<button href={link} class="btn btn-outline">Go to tool</button>
		</div>
	</div>
</div>

<script lang="ts">
	import { ArrowRight, PaintBrush } from 'svelte-heros-v2';
	export let title: string;
	export let description: string;
	export let Icon: ConstructorOfATypedSvelteComponent | undefined = PaintBrush;
	export let link: string;
</script>

<a
	href={link}
	class="flex items-center justify-between w-full max-w-sm  shadow-xl p-4 py-8  rounded-lg hover:-translate-y-2 bg-stone-900 hover:bg-stone-800 focus:translate-y-0 transform transition"
>
	<div class="flex items-center ">
		<div
			class="rounded-full w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 flex justify-center items-center relative"
		>
			<Icon size="25" />
		</div>
		<div class="ml-3">
			<h5 class="mb-1 text-lg font-medium ">{title}</h5>
			<span class="text-sm text-gray-400">{description}</span>
		</div>
	</div>
	<div>
		<ArrowRight size={'25px'} />
	</div>
</a>

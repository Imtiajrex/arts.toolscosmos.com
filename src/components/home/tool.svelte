<script lang="ts">
	import { ChevronRight, PaintBrush } from 'svelte-heros-v2';
	export let title: string;
	export let description: string;
	export let Icon: ConstructorOfATypedSvelteComponent | undefined = PaintBrush;
	export let link: string;
	export let bg: string;
</script>

<a
	href={link}
	class="w-80 pt-4 flex items-center justify-between py-3 rounded-md p-3  hover:bg-base-100  transition active:bg-base-200"
>
	<div class="flex items-center">
		<div class={'rounded-full w-10 h-10 flex justify-center items-center relative ' + bg}>
			<Icon size="20" />
		</div>
		<div class="ml-3">
			<h5 class="mb-1 text-md font-medium ">{title}</h5>
			<span class="text-sm text-gray-400">{description}</span>
		</div>
	</div>
	<ChevronRight size={'20px'} />
</a>

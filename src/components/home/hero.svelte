<script>
	import { ArrowRight, Phone } from 'svelte-heros-v2';
	import BgGradient from '../lib/bg-gradient.svelte';
</script>

<div class="relative px-6 lg:px-8">
	<div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
		<div>
			<div>
				<h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
					Unleashing Your Inner Artist: Practice Tools for Creativity
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
					Explore our selection of top-quality practice tools and resources, and discover the
					perfect tools to help you take your art to new heights
				</p>
				<div class="mt-8 flex gap-x-4 sm:justify-center">
					<button class="btn"
						>Check our tools
						<span class="ml-2"> <ArrowRight size={'18px'} /></span>
					</button>
				</div>
			</div>
			<BgGradient />
		</div>
	</div>
</div>

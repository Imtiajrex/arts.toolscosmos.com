<script>
	import { Button } from 'flowbite-svelte';
	import { ArrowRight, Phone } from 'svelte-heros-v2';
	import BgGradient from '../lib/bg-gradient.svelte';
</script>

<div class="relative px-6 lg:px-8">
	<div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
		<div>
			<div>
				<h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
					Data to enrich your online business
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
					Elit sunt amet fugiat veniam occaecat fugiat aliqua.
				</p>
				<div class="mt-8 flex gap-x-4 sm:justify-center">
					<Button size="lg"
						>Check our tools
						<span class="ml-2"> <ArrowRight size={'18px'} /></span>
					</Button>
				</div>
			</div>
			<BgGradient />
		</div>
	</div>
</div>

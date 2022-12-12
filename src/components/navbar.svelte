<script>
	import { page } from '$app/stores';
	import { Bars2 } from 'svelte-heros-v2';
	let collapsed = false;
	const linkClass =
		'block py-2 pl-3 pr-4 text-black hover:text-primary transition-all rounded md:p-0 dark:text-white ';
</script>

<nav class="p-3 py-8  rounded bg-transparent">
	<div class="container flex flex-wrap items-center justify-between mx-auto">
		<a href="/" class="flex items-center">
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
				Artsmos</span
			>
		</a>
		<button
			data-collapse-toggle="navbar-solid-bg"
			on:click={() => (collapsed = !collapsed)}
			type="button"
			class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-solid-bg"
			aria-expanded={collapsed}
		>
			<Bars2 />
		</button>
		<div class="{!collapsed && 'hidden'} w-full md:block md:w-auto" id="navbar-solid-bg">
			<ul
				class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
			>
				<li>
					<a
						href="/"
						class={`${linkClass} ${$page.url.pathname == '/' && 'text-primary'} `}
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						href="/reference-generator"
						class={`${linkClass} ${
							$page.url.pathname == '/reference-generator' && 'text-primary'
						} `}>Reference Generator</a
					>
				</li>
				<li>
					<a
						href="/contact"
						class={`${linkClass} ${$page.url.pathname == '/contact' && 'text-primary'} `}>Contact</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

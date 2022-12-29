<script>
	import { page } from '$app/stores';
	import { Bars2 } from 'svelte-heros-v2';
	let collapsed = false;
	const linkClass = 'block py-2 pl-3 pr-4 hover:text-primary transition-all rounded md:p-0 ';
</script>

<nav class="container p-3 py-8  px-6 lg:px-8  rounded bg-transparent  mx-auto">
	<div class=" flex flex-wrap items-center justify-between">
		<a href="/" class="flex items-center">
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
				Tools Cosmos</span
			>
		</a>
		<button
			data-collapse-toggle="navbar-solid-bg"
			on:click={() => (collapsed = !collapsed)}
			type="button"
			class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-solid-bg"
			aria-expanded={collapsed}
		>
			<Bars2 />
		</button>
		<div class="{!collapsed && 'hidden'} w-full md:block md:w-auto" id="navbar-solid-bg">
			<ul
				class="flex flex-col font-bold text-sm mt-4 rounded-lg bg-base-100 py-6 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent"
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
						href="/tools/arts/reference-generator"
						class={`${linkClass} ${
							$page.url.pathname == '/tools/arts/reference-generator' && 'text-primary'
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

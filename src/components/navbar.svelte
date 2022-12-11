<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar
	navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b bg-gray-100/0 bg-opacity-0"
	let:hidden
	let:toggle
>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span
		>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/reference-generator">Reference Generator</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>

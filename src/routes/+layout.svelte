<script>
	import Navbar from '../components/navbar.svelte';
	import '../app.postcss';
	import BgGradient from '../components/lib/bg-gradient.svelte';
	import Footer from '../components/home/footer.svelte';
</script>

<svelte:head>
	<title>Arts Cosmos - Tools for artists</title>
	<meta
		name="description"
		content="At Arts Cosmos, we provide artists with the tools they need to take their craft to the next level. Our platform offers a wide range of resources, including instructional materials, personalized feedback, and a vibrant community of fellow artists. Whether you're a beginner looking to learn the basics or a seasoned pro seeking inspiration and support, Arts Cosmos has something for you. Join us and discover the joy of creating art, growing as an artist, and sharing your passion with the world."
	/>
</svelte:head>
<div class="bg-base-300 relative">
	<Navbar />
	<slot />
	<Footer />
</div>

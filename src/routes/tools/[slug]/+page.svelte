<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { param } = data;
</script>

<div>
	<h1>{param}</h1>
	<p>Content for {param}</p>
</div>

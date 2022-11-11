<script lang="ts">
	import Header from './header'
	import Projects from './projects/Projects.svelte'

	export let ProfileOwnerUID: string
</script>

<main class="bg-black min-h-screen text-white flex flex-col items-center gap-3 p-12">
	<Header />
	<Projects />
</main>

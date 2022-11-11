<script lang="ts">
	import Header from './header'
	import Projects from './projects'

	export let ProfileOwnerUID: string
</script>

<main class="bg-black min-h-screen text-white flex flex-col items-center gap-8 p-12">
	<Header />
	<Projects />
</main>

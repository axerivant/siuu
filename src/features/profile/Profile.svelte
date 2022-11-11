<script lang="ts">
	import Widget from './ui/Widget.svelte'

	export let ProfileOwnerUID: string
</script>

<main>
	<Widget>
		<p>content</p>
	</Widget>
</main>

<style>
	main {
		@apply bg-black min-h-screen text-white flex flex-col items-center gap-3 p-12;
	}
</style>

<script lang="ts">
	const DummyTags = ['svelte', 'react', 'javascript', 'typescript', 'threejs', 'linux']
</script>

<div id="tags" class="flex flex-wrap gap-2">
	{#each DummyTags as tag}
		<div id="tag" class="text-200 bg-600 font-medium rounded-full w-fit p-1 px-3">{tag}</div>
	{/each}
</div>

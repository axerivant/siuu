<script lang="ts">
	/**Use for adding TW styles to Widget.*/
	export let tw: string = ''
</script>

<section id="widget" class={tw}>
	<slot />
</section>

<style>
	#widget {
		@apply bg-700 w-7/12 p-12 rounded-sm;
	}
</style>

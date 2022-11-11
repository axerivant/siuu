<script lang="ts">
	export let icon: string
</script>

<button
	on:click
	class="bg-600 p-3 h-10 w-10 rounded-full hover:brightness-[115%] active:brightness-[125%] transition-all flex justify-center items-center"
>
	<img src={icon} alt="" />
</button>

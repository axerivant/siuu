<script lang="ts">
	import IconButton from '../../ui/IconButton.svelte'
	import Tags from '../../ui/Tags.svelte'
	import Widget from '../../ui/Widget.svelte'
</script>

<Widget tw="flex justify-between gap-6">
	<div
		id="profile-pic"
		class="h-56 w-56 bg-cover bg-center rounded-full"
		style="background-image: url('/dummy.jpg');"
	/>
	<div id="profile-info" class="flex flex-col gap-6 w-96">
		<div>
			<h1 class="text-3xl font-semibold">Axer Ivant</h1>
			<h2 class="text-lg text-300">web developer</h2>
		</div>
		<Tags />
	</div>
	<div id="profile-contact" class="w-2/12 flex gap-3">
		<IconButton icon="/icons/mail.svg" />
		<IconButton icon="/icons/phone.svg" />
		<IconButton icon="/icons/document.svg" />
	</div>
</Widget>

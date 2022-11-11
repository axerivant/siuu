<script lang="ts">
	import { Link, Widget } from '../ui'
	export let project: ProjectType
</script>

<Widget tw="flex gap-6">
	<img src={project.image} alt={project.name} class="w-6/12" />
	<div class="flex flex-col justify-between">
		<div class="flex flex-col gap-3">
			<p class="text-100 font-medium">{project.name}</p>
			<p class="text-200">{project.description}</p>
		</div>
		<div>
			<Link href={project.liveLink} label="view live" />
			<Link href={project.repoLink} label="view repo" />
		</div>
	</div>
</Widget>

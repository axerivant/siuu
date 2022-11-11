<script lang="ts">
	import Project from './Project.svelte'
	const DummyProjects: ProjectType[] = [
		{
			name: 'dummy',
			image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
			description:
				'Lorem ipsum dolor sit amet consectetur. Facilisis pellentesque ac aliquet a quam. Aliquam orci eget imperdiet tempus quis vestibulum amet ornare. Neque magna massa non convallis augue curabitur sed cras nisi. Tellus amet ornare egestas purus sed velit elit. Integer scelerisque imperdiet ut lobortis varius sapien.',
			liveLink: '',
			repoLink: ''
		},
		{
			name: 'dummy',
			image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
			description:
				'Lorem ipsum dolor sit amet consectetur. Facilisis pellentesque ac aliquet a quam. Aliquam orci eget imperdiet tempus quis vestibulum amet ornare. Neque magna massa non convallis augue curabitur sed cras nisi. Tellus amet ornare egestas purus sed velit elit. Integer scelerisque imperdiet ut lobortis varius sapien.',
			liveLink: '',
			repoLink: ''
		},
		{
			name: 'dummy',
			image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
			description:
				'Lorem ipsum dolor sit amet consectetur. Facilisis pellentesque ac aliquet a quam. Aliquam orci eget imperdiet tempus quis vestibulum amet ornare. Neque magna massa non convallis augue curabitur sed cras nisi. Tellus amet ornare egestas purus sed velit elit. Integer scelerisque imperdiet ut lobortis varius sapien.',
			liveLink: '',
			repoLink: ''
		},
		{
			name: 'dummy',
			image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
			description:
				'Lorem ipsum dolor sit amet consectetur. Facilisis pellentesque ac aliquet a quam. Aliquam orci eget imperdiet tempus quis vestibulum amet ornare. Neque magna massa non convallis augue curabitur sed cras nisi. Tellus amet ornare egestas purus sed velit elit. Integer scelerisque imperdiet ut lobortis varius sapien.',
			liveLink: '',
			repoLink: ''
		}
	]
</script>

{#each DummyProjects as project}
	<Project {project} />
{/each}

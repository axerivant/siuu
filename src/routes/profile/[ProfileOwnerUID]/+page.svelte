<script lang="ts">
	import Profile from '@features/profile'
	import { page } from '$app/stores'

	const ProfileOwnerUID = $page.params.ProfileOwnerUID
</script>

<Profile {ProfileOwnerUID} />

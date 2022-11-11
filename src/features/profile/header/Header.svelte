<script lang="ts">
	/**Profile Header*/
	import { Widget } from '../ui'
	import { ProfileContact, ProfileImage, ProfileInfo } from '.'
</script>

<Widget tw="flex justify-between gap-6">
	<ProfileImage />
	<ProfileInfo />
	<ProfileContact />
</Widget>

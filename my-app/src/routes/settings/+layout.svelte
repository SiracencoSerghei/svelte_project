<script lang="ts">
	import type { LayoutProps } from '../$types.js';

	let {children }: LayoutProps = $props();
</script>

<h1>Settings layout</h1>

{@render children()}
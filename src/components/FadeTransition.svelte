<script lang="ts">
    import { fade } from 'svelte/transition';

    let visible = $state(true);
</script>

<div>
<label>
    <input type="checkbox" bind:checked={visible} />
</label>

{#if visible}
<p transition:fade>
    Fades in and out
</p>
{/if}
</div>
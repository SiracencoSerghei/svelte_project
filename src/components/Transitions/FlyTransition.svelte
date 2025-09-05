<script lang="ts">
  import { fly } from 'svelte/transition';

  let visible = $state(true);
</script>

<div>
  <label>
    <input type="checkbox" bind:checked={visible} />
  </label>

  {#if visible}
    <p transition:fly={{ x: 200, duration: 2000 }}>Fades in and out</p>
  {/if}
</div>

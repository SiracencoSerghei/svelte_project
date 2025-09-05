<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  let visible = $state(true);
</script>

<div>
  <label>
    <input type="checkbox" bind:checked={visible} />
  </label>

  {#if visible}
    <p in:fly={{ x: 200, duration: 2000 }} out:fade={{ duration: 1000 }}>
      Flies in, Fades out
    </p>
  {/if}
</div>

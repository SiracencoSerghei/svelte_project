<script lang="ts">
  let count = $state(0);
  function increment() {
    count += 1;
  }
</script>

<button onclick={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>

{#if count > 10}
  <p>Count is greater than 10</p>
{:else if count > 5}
  <p>Count is greater than 5</p>
{:else}
  <p>Count is 5 or less</p>
{/if}

<p>Current count: {count}</p>

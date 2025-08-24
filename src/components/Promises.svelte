<script>
  import { roll } from '../utils/utils.js';
  let promise = $state(roll());
</script>

<button onclick={() => (promise = roll())}> roll the dice </button>
<p>...rolling</p>
<p>{promise ? `You rolled a ${promise}` : 'Click the button to roll'}</p>

{#await promise}
  <p>...rolling</p>
{:then number}
  <p>You rolled a {number}</p>
{:catch error}
  <p style="color:red">{error.message}</p>
{/await}

{#await promise then number}
  <p>You rolled a {number}</p>
{/await}

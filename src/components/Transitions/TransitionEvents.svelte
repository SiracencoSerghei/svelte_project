<script>
	import { fly } from 'svelte/transition';

	let visible = $state(true);
	let status = $state('waiting...');
</script>


<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

<div class="wrapper">
<p>status: {status}</p>

{#if visible}
	<p
		transition:fly={{ y: 200, duration: 2000 }}
        onintrostart={() => (status = 'intro started')}
        onintroend={() => (status = 'intro ended')}
        onoutrostart={() => (status = 'outro started')}
        onoutroend={() => (status = 'outro ended')}
	>
		Flies in and out
	</p>
{/if}
</div>


<style>
  .wrapper {
    width: 300px;
    height: 200px;
    border: 1px solid #ccc;
  }
    label {
        display: block;
        margin-bottom: 1em;
    }

    p {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
    }
</style>
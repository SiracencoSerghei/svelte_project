<script lang="ts">
	// Declering props
	let { answer } = $props()

</script>

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>

<p>This is a paragraph.</p>

<!-- using props -->
<p>The answer is {answer}</p>
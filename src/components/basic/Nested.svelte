<script lang="ts">
  // Declering props
  let { answer = 'a mystery' } = $props();
</script>

<!-- using props -->
<p>The answer is {answer}</p>

<style>
  p {
    color: goldenrod;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>

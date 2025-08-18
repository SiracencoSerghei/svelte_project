<script lang="ts">
  let numbers = $state([1, 2, 3, 4]);

  function addNumber() {
    numbers.push(numbers.length + 1);
  }

  let total = $derived(numbers.reduce((a, b) => a + b, 0));
</script>

<p>{numbers.join(' + ')} = {total}</p>
<button onclick={addNumber}>Add a number</button>

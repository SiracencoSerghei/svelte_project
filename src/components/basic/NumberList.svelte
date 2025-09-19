<script lang="ts">
  let numbers = $state([1, 2, 3, 4]);
  let total = $derived(numbers.reduce((a, b) => a + b, 0));

  function addNumber() {
    numbers.push(numbers.length + 1);
    // console.log($state.snapshot(numbers)); // Log the current state of numbers
  }
  // $inspect(numbers, 'numbers')
  // $inspect(numbers, 'numbers').with(console.trace); // Inspect the numbers state
</script>

<p>{numbers.join(' + ')} = {total}</p>
<button onclick={addNumber}>Add a number</button>

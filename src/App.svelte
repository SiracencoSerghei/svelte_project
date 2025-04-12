<script lang="ts">
  import Nested from './Nested.svelte';
  let name = 'world';
  let src = 'https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121_1280.jpg';
  let string = `this string contains some <strong>HTML!!!</strong>`
  
  let count = $state(0);
  function increment() {
    count+=1;
  }

  let numbers = $state([1, 2, 3, 4])
  function addNumber() {
  // numbers[numbers.length] = numbers.length + 1;
   numbers.push(numbers.length + 1)
  //  Inspecting state
  console.log($state.snapshot(numbers));
  }
  // $inspect(numbers);

	// $inspect(numbers).with(console.trace);

  function sumArray(arr: number[]) {
    return arr.reduce((acc, val) => acc + val, 0);
  }
  // derived state
  let total = $derived(numbers.reduce((acc, val) => acc + val, 0))

  // Effects
  let elapsed = $state(0)
  let interval = $state(1000)

  $effect(() => {
    const id = setInterval(() => {
      elapsed += 1
    }, interval)
    return () => {
      clearInterval(id)
    }
  })

</script>

<style>
  h1 {
    color: rgb(38, 139, 8);
    text-align: center;
  }

  .image-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 8px;
  }
</style>

<h1>Hello {name.toUpperCase()}!</h1>
<div class="image-container">
  <img src={src} alt="{name} image" />
</div>
<Nested/>

<p>{string}</p>
<p>{@html string}</p>

<button onclick={increment}>
Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{numbers.join(' + ')} = {sumArray(numbers)}</p>
<p>{numbers.join(' + ')} = {total}</p>
<button onclick={addNumber}>
  Add a number
</button>

 <!-- // Effects -->
 <div>
   <button onclick={() => interval /= 2} >Speed up</button>
   <button onclick={() => interval *= 2}>Slow down</button>
 </div>

 <p>elapsed: {elapsed}</p>

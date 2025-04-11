<script lang="ts">
  import Nested from './Nested.svelte';
  let name = 'world';
  let src = 'https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121_1280.jpg';
  let string = `this string contains some <strong>HTML!!!</strong>`
  
  let count = $state(0);
  function increment() {
    count+=1;
  }

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
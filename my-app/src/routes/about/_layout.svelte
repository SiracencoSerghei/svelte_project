<!-- routes/about/_layout.svelte -->
<script lang="ts">
  import NavBar from '../../components/NavBar.svelte';  // You can reuse NavBar here
</script>

<style>
  main {
    background-color: #f5f5f5;  /* Custom background for the About page */
    padding: 30px;
  }
</style>

<NavBar />  <!-- NavBar can still be used on this page -->

<main>
  <h1>About Us</h1>
  <slot></slot> <!-- Content for the About page will be injected here -->
</main>

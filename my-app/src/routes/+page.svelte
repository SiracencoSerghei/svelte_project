<script>
  import App from '../components/App.svelte';
</script>

<style>
  /* Apply background image globally */
  .layout-container {
    background-image: url('/img/home-bg.jpg');
    background-size: cover;
    background-position: center center;
    height: 100vh; /* Full viewport height */
    justify-content: center;
    align-items: center;
    color: rgb(192, 188, 244);
  }
</style>

<div class="layout-container">
  <div>
    <h1>Hello and welcome to my site!</h1>
    <a href="/about">About my site</a>
  </div>
  <App />
</div>

<!-- routes/+page.svelte -->
<script>
  import NavBar from '../components/NavBar.svelte';  // Import NavBar
</script>

<style>
  /* Apply background image globally */
  .layout-container {
    background-image: url('/img/home-bg.jpg');
    background-size: cover;
    background-position: center center;
    height: 100vh; /* Full viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: rgb(192, 188, 244);
  }

  /* NavBar container */
  header {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    color: white;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #ff7f50;
  }
</style>

<header>
  <!-- Add NavBar here -->
  <NavBar />
</header>

<div class="layout-container">
  <!-- Homepage content -->
  <div>
    <h1>Hello and welcome to my site!</h1>
    <a href="/about">About my site</a>
  </div>
  
</div>

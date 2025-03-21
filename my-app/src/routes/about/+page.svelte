<!-- routes/about/+page.svelte -->
<script>
  import NavBar from '../../components/NavBar.svelte';  // Same NavBar
</script>

<style>
  .layout-container {
    background-image: url('/img/about-bg.jpg');
    background-size: cover;
    background-position: center center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
  }

  header {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    color: #140101;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    margin-top: 10px;
  }
</style>

<header>
  <NavBar />
</header>

<div class="layout-container">
  <h1>About Us</h1>
  <p>We are a company dedicated to providing the best services.</p>
</div>

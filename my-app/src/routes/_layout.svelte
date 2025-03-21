<script>
  import NavBar from '../components/NavBar.svelte';
  import Sidebar from '../components/Sidebar.svelte'; // Import Sidebar
</script>

<style>
  /* Apply background image globally */
  .layout-container {
    background-image: url('/img/global-bg.jpg');
    background-size: cover;
    background-position: center center;
    min-height: 100vh; /* Full height of the viewport */
    display: flex;
    flex-direction: column;
  }

  header {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Optional overlay */
    padding: 10px;
    color: white;
  }

  footer {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    text-align: center;
    color: white;
  }

  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
</style>

<header>
  <NavBar />
</header>

<div class="layout-container">
  <Sidebar /> <!-- Display the Sidebar on mobile/tablet screens -->
  <main>
    <slot></slot> <!-- Content will be injected here -->
  </main>
</div>

<footer>
  <p>&copy; 2025 Serghei Siracenco</p>
</footer>

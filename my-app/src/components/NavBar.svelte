<script>
  import { onMount } from 'svelte';

  let isAuthenticated = false; // You can replace this with your actual authentication logic

  // Example function to check if the user is authenticated
  onMount(() => {
    // This could be replaced with real logic
    // e.g., check session or JWT token
    isAuthenticated = false; // Replace this based on actual authentication check
  });
</script>

<nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
  <div class="container px-4 px-lg-5">
    <a class="navbar-brand" href="/">Start Bootstrap</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      Menu
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto py-4 py-lg-0">
        <li class="nav-item">
          <a class="nav-link px-lg-3 py-3 py-lg-4" href="/">Home</a>
        </li>

        {#if !isAuthenticated}
          <li class="nav-item">
            <a class="nav-link px-lg-3 py-3 py-lg-4" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-lg-3 py-3 py-lg-4" href="/register">Register</a>
          </li>
        {:else}
          <li class="nav-item">
            <a class="nav-link px-lg-3 py-3 py-lg-4" href="/logout">Log Out</a>
          </li>
        {/if}

        <li class="nav-item">
          <a class="nav-link px-lg-3 py-3 py-lg-4" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-lg-3 py-3 py-lg-4" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

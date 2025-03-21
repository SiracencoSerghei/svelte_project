<script lang="ts">
  import { onMount } from 'svelte';

  let isAuthenticated = false; // Placeholder for actual authentication logic

  // Simulate authentication check when the component mounts
  onMount(() => {
    // Replace this with actual authentication logic
    // e.g., check session or JWT token
    isAuthenticated = false; // Set the actual authentication status here
  });
</script>

<style>
  nav {
    background-image: url('/img/global-bg.jpg'); /* Set the background image here */
    background-size: cover;
    background-position: center center;
    color: white;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #fff; /* White text for navbar links */
  }

  a:hover {
    color: #007BFF;
  }

  /* Make navbar items more responsive on smaller screens */
  @media (max-width: 768px) {
    nav {
      background-color: rgba(0, 0, 0, 0.7); /* Optional overlay for smaller screens */
    }
  }
</style>

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
        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/">Home</a></li>
        {#if !isAuthenticated}
          <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/login">Login</a></li>
          <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/register">Register</a></li>
        {:else}
          <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/logout">Log Out</a></li>
        {/if}
        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/about">About</a></li>
        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

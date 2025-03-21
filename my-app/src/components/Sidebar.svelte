<script lang="ts">
  // Add logic for active state, etc.
</script>

<style>
  /* Sidebar styles */
  .sidebar {
    display: none; /* Hide by default */
    background-image: url('/img/global-bg.jpg'); /* Same background image */
    background-size: cover;
    background-position: center center;
    color: white;
    padding: 10px;
  }

  /* Make sidebar visible on mobile and tablet */
  @media (max-width: 768px) {
    .sidebar {
      display: block;
      width: 250px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      z-index: 100;
    }
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
    color: #fff; /* White text for sidebar links */
  }

  a:hover {
    color: #007BFF;
  }
</style>

<div class="sidebar">
  <h3>Navigation</h3>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</div>

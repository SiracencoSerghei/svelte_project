<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<div class="image-container">
  <img {src} {alt} />
</div>

<style>
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

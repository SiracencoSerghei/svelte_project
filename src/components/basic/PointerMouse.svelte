<script>
  // function onpointermove(event) {
  //   m.x = event.clientX;
  //   m.y = event.clientY;
  // }

  let m = $state({ x: 0, y: 0 });
</script>

<!-- <div {onpointermove}>
	The pointer is at {m.x} x {m.y}
</div> -->

<!-- <div class="tracker" onpointermove={(event) => {
  m.x = event.clientX;
  m.y = event.clientY}}>
  The pointer is at {m.x} x {m.y}
</div> -->

<!-- зробили в кінці кода - svelte:window on:pointermove -->
<div class="tracker">
  The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
</div>

<svelte:window
  on:pointermove={(e) => {
    m.x = e.clientX;
    m.y = e.clientY;
  }}
/>

<style>
  .tracker {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    padding: 0.5rem 0.75rem;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    border-radius: 0.5rem;
    pointer-events: none;
    z-index: 9999;
    font-family: system-ui, sans-serif;
  }
</style>

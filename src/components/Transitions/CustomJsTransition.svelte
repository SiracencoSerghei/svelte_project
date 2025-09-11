<script>
  let visible = $state(false);

  function typewriter(node, { speed = 1 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`,
      );
    }

    // return {};
    const text = node.textContent;
    const duration = text.length / (speed * 0.01);
    return {
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

<div class="wrapper">
  {#if visible}
    <p transition:typewriter>The quick brown fox jumps over the lazy dog</p>
  {/if}
</div>

<style>
  .wrapper {
    width: 300px;
    height: 200px;
    border: 1px solid #ccc;
  }
  label {
    display: block;
    margin-bottom: 1em;
  }

  p {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
  }
</style>

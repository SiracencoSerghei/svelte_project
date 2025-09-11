<script>
  import { fade } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';

  let visible = $state(true);

  //   function spin(node, { duration }) {
  //     return {
  //       duration,
  //       css: (t, u) => ``,
  //     };
  //   }

  //   function fade(node, { delay = 0, duration = 400 }) {
  //     const o = +getComputedStyle(node).opacity;

  //     return {
  //       delay,
  //       duration,
  //       css: (t) => `opacity: ${t * o}`,
  //     };
  //   }

  function spin(node, { duration }) {
    return {
      duration,
      css: (t, u) => {
        const eased = elasticOut(t);

        return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * u)}%,
						${Math.min(50, 500 * u)}%
					);`;
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
    <div class="centered" in:spin={{ duration: 8000 }} out:fade>
      <span>transitions!</span>
    </div>
  {/if}
</div>

<style>
  .wrapper {
    position: relative; /* 🔹 робимо контейнер контекстом */
    width: 300px; /* можна задати ширину/висоту */
    height: 200px;
    border: 1px solid #ccc; /* для наочності */
  }
  .centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 4em;
  }
</style>

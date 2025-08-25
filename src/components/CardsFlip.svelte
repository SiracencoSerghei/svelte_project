<script>
  let flipped = $state(false);
</script>

<div class="container">
  Flip the card
  <!-- старий варіант класу -->
  <!-- class="card {flipped ? 'flipped' : ''}" -->

  <!-- <button class={['card', { flipped }]} onclick={() => (flipped = !flipped)}> -->
  <!-- <button 
    class="card"
    style="transform: {flipped ? 'rotateY(0)' : ''}; --bg-1: palegoldenrod; --bg-2: black; --bg-3: goldenrod"
    onclick={() => (flipped = !flipped)}> -->
  <button
    class="card"
    style:transform={flipped ? 'rotateY(0)' : ''}
    style:--bg-1="palegoldenrod"
    style:--bg-2="black"
    style:--bg-3="goldenrod"
    onclick={() => (flipped = !flipped)}
  >
    <div class="front">
      <span class="symbol">♠</span>
    </div>
    <div class="back">
      <div class="pattern"></div>
    </div>
  </button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: 100%;
    align-items: center;
    justify-content: center;
    perspective: 100vh;
  }

  .card {
    position: relative;
    aspect-ratio: 2.5 / 3.5;
    font-size: min(1vh, 0.25rem);
    height: 80em;
    background: var(--bg-1);
    border-radius: 2em;
    transform: rotateY(180deg);
    transition: transform 0.4s;
    transform-style: preserve-3d;
    padding: 0;
    user-select: none;
    cursor: pointer;
  }
  /* 
  .card.flipped {
    transform: rotateY(0);
  } */

  .front,
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    border-radius: 2em;
    border: 1px solid var(--fg-2);
    box-sizing: border-box;
    padding: 2em;
  }

  .front {
    background:
      url(../utils/svelte-logo.svg) no-repeat 5em 5em,
      url(../utils/svelte-logo.svg) no-repeat calc(100% - 5em) calc(100% - 5em);
    background-size:
      8em 8em,
      8em 8em;
  }

  .back {
    transform: rotateY(180deg);
  }

  .symbol {
    font-size: 30em;
    color: var(--fg-1);
  }

  .pattern {
    width: 100%;
    height: 100%;
    background-color: var(--bg-2);
    /* pattern from https://projects.verou.me/css3patterns/#marrakesh */
    background-color: white;
    background-image:
      radial-gradient(midnightblue 9px, transparent 10px),
      repeating-radial-gradient(
        midnightblue 0,
        midnightblue 4px,
        transparent 5px,
        transparent 20px,
        midnightblue 21px,
        midnightblue 25px,
        transparent 26px,
        transparent 50px
      );
    background-size:
      30px 30px,
      90px 90px;
    background-position: 0 0;
  }
</style>

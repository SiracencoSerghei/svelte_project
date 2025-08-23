<script lang="ts">
  import Header from './components/Header.svelte';
  import ImageBox from './components/ImageBox.svelte';
  import Nested from './components/Nested.svelte';
  import Counter from './components/Counter.svelte';
  import CounterButton from './components/CounterButton.svelte';
  import NumberList from './components/NumberList.svelte';
  import Timer from './components/Timer.svelte';
  import PackageInfo from './components/PackageInfo.svelte';
  import ColorPicker from './components/ColorPicker.svelte';
  import Thing from './components/Thing.svelte';
  import { roll } from './utils/utils.js';
  import Stepper from './components/Stepper.svelte';
  import BigRedButton from './components/BigRedButton.svelte';
  import { onMount } from 'svelte';
  import horn from './utils/horn.mp3';
  import carHorn from './utils/Car-Horn.mp3';

  let name = 'Sergio';
  let src =
    'https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121_1280.jpg';
  let string = `this string contains some <strong>HTML!!!</strong>`;
  const pkg = {
    name: 'svelte',
    version: '5.0.0',
    description: 'blazing fast',
    website: 'https://svelte.dev',
  };
  let things = $state([
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' },
  ]);

  let promise = $state(roll());

  let m = $state({ x: 0, y: 0 });

  // function onpointermove(event) {
  //   m.x = event.clientX;
  //   m.y = event.clientY;
  // }

  let value = $state(0);

  let audioHorn: HTMLAudioElement | null = null;
  let audioCarHorn: HTMLAudioElement | null = null;

  // створюється тільки в браузері, а не на сервері
  onMount(() => {
    audioHorn = new Audio(horn);
    audioCarHorn = new Audio(carHorn);
  });

  // function honk() {
  //   audio.load();
  //   audio.play();
  // }

  function playSound(src: string) {
    const audio = new Audio(src);
    audio.play();
  }
</script>

<Header {name} />
<ImageBox {src} alt="{name} image" />

<Nested answer={name} />
<Nested answer="42" />
<Nested />

<p>{string}</p>
<p>{@html string}</p>

<CounterButton />

<NumberList />

<Timer />

<!-- Три окремі незалежні лічильники -->
<Counter />
<Counter />
<Counter />

<PackageInfo {...pkg} />

<ColorPicker />

<button onclick={() => things.shift()}> Remove first thing </button>

{#each things as thing}
  <Thing name={thing.name} />
{/each}

<button onclick={() => (promise = roll())}> roll the dice </button>
<p>...rolling</p>
<p>{promise ? `You rolled a ${promise}` : 'Click the button to roll'}</p>

{#await promise}
  <p>...rolling</p>
{:then number}
  <p>You rolled a {number}</p>
{:catch error}
  <p style="color:red">{error.message}</p>
{/await}

{#await promise then number}
  <p>You rolled a {number}</p>
{/await}

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

<!-- спершу спрацьовує інпут, потім див -->
<!-- <div onkeydown={(e) => alert(`<div> ${e.key}`)} role="presentation">
	<input onkeydown={(e) => alert(`<input> ${e.key}`)} />
</div> -->
<!-- зворотний порядок - перший див, потім інпут -->
<div onkeydowncapture={(e) => alert(`<div> ${e.key}`)} role="presentation">
  <input onkeydowncapture={(e) => alert(`<input> ${e.key}`)} />
</div>

<Stepper increment={() => (value += 1)} decrement={() => (value -= 1)} />
<p>Value: {value}</p>

<BigRedButton onclick={() => playSound(horn)} />
<BigRedButton onclick={() => playSound(carHorn)} />

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
    pointer-events: none; /* не блокує кліки по UI */
    z-index: 9999;
    font-family: system-ui, sans-serif;
  }
</style>

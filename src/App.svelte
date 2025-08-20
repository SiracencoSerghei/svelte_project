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

	

  let name = 'Sergio';
  let src = 'https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121_1280.jpg';
  let string = `this string contains some <strong>HTML!!!</strong>`;
  const pkg = {
    name: 'svelte',
    version: '5.0.0',
    description: 'blazing fast',
    website: 'https://svelte.dev'
  };
  let things = $state([
      { id: 1, name: 'apple' },
      { id: 2, name: 'banana' },
      { id: 3, name: 'carrot' },
      { id: 4, name: 'doughnut' },
      { id: 5, name: 'egg' }
    ]);

</script>

<style>
  button,
  Thing {
    margin: 10px auto;
    /* 200px зверху і знизу, auto по боках */
    padding: 10px 20px;
    background-color: #007bff;
    display: block;
    /* щоб auto працювало */
    width: fit-content;
    /* кнопка буде по ширині контенту */
}
</style>

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

<button onclick={() => things.shift()}>
	Remove first thing
</button>

{#each things as thing}
	<Thing name={thing.name} />
{/each}




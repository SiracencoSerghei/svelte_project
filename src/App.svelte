<script lang="ts">
  import Header from './components/basic/Header.svelte';
  import ImageBox from './components/basic/ImageBox.svelte';
  import Nested from './components/basic/Nested.svelte';
  import Counter from './components/basic/Counter.svelte';
  import CounterButton from './components/basic/CounterButton.svelte';
  import NumberList from './components/basic/NumberList.svelte';
  import Timer from './components/basic/Timer.svelte';
  import PackageInfo from './components/basic/PackageInfo.svelte';
  import ColorPicker from './components/basic/ColorPicker.svelte';
  import Thing from './components/basic/Thing.svelte';

  import Stepper from './components/basic/Stepper.svelte';
  import BigRedButton from './components/basic/BigRedButton.svelte';
  import { onMount } from 'svelte';
  import horn from './utils/horn.mp3';
  import carHorn from './utils/Car-Horn.mp3';
  import NumberInput from './components/Inputs/InputNumber.svelte';
  import InputCheckBox from './components/Inputs/InputCheckBox.svelte';
  import SelectBinding from './components/basic/SelectBinding.svelte';
  import InputsGroup from './components/Inputs/InputsGroup.svelte';
  import MultipleSelect from './components/basic/MultipleSelect.svelte';
  import InputsTextArea from './components/Inputs/InputsTextArea.svelte';
  import Promises from './components/basic/Promises.svelte';
  import PointerMouse from './components/basic/PointerMouse.svelte';
  import OneKeyDownCapture from './components/basic/OneKeyDownCapture.svelte';
  import CardsFlip from './components/basic/CardsFlip.svelte';
  import Boxes from './components/basic/Boxes.svelte';
  import CanvasVrapper from './components/basic/CanvasVrapper.svelte';
  import Tippi from './components/basic/Tippi.svelte';
  import FadeTransition from './components/Transitions/FadeTransition.svelte';
  import FlyTransition from './components/Transitions/FlyTransition.svelte';
  import FadeFlyTransition from './components/Transitions/FadeFlyTransition.svelte';
  import CastomTransition from './components/Transitions/CustomTransition.svelte';
  import CastomJsTransition from './components/Transitions/CustomJsTransition.svelte';
  import TransitionEvents from './components/Transitions/TransitionEvents.svelte';
  import GlobalTransition from './components/Transitions/GlobalTransition.svelte';
  import KeyBlocks from './components/Transitions/KeyBlocks.svelte';
  import RowState from './components/AdvancedReactivity/RowState.svelte';
  import ReactiveClasses from './components/AdvancedReactivity/ReactiveClasses.svelte';
  import GettersSetters from './components/AdvancedReactivity/GettersSetters.svelte';
  import ReactiveBuiltIns from './components/AdvancedReactivity/ReactiveBuiltIns.svelte';
  import CounterAdvance from './components/AdvancedReactivity/CounterAdvance.svelte';
  import Snippets from './components/AdvancedReactivity/Snippets.svelte';
    import SnippetsToComponent from './components/AdvancedReactivity/SnippetsToComponent.svelte';

  let name = $state('Sergio');
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

<Promises />
<PointerMouse />
<OneKeyDownCapture />

<Stepper increment={() => (value += 1)} decrement={() => (value -= 1)} />
<p>Value: {value}</p>

<BigRedButton onclick={() => playSound(horn)} />
<BigRedButton onclick={() => playSound(carHorn)} />

<NumberInput />
<InputCheckBox />
<SelectBinding />

<InputsGroup />
<MultipleSelect />

<InputsTextArea />

<CardsFlip />

<Boxes />

<!-- <CanvasVrapper /> -->

<Tippi />

<FadeTransition />
<FlyTransition />
<FadeFlyTransition />
<CastomTransition />
<CastomJsTransition />
<TransitionEvents
/>
<GlobalTransition />
<KeyBlocks />

<RowState />
<ReactiveClasses
/>

<GettersSetters />
<ReactiveBuiltIns />

<CounterAdvance />
<CounterAdvance />
<CounterAdvance />

<Snippets />
<SnippetsToComponent />

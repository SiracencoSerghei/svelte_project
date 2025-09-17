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

  import Stepper from './components/Stepper.svelte';
  import BigRedButton from './components/BigRedButton.svelte';
  import { onMount } from 'svelte';
  import horn from './utils/horn.mp3';
  import carHorn from './utils/Car-Horn.mp3';
  import NumberInput from './components/Inputs/InputNumber.svelte';
  import InputCheckBox from './components/Inputs/InputCheckBox.svelte';
  import SelectBinding from './components/SelectBinding.svelte';
  import InputsGroup from './components/Inputs/InputsGroup.svelte';
  import MultipleSelect from './components/MultipleSelect.svelte';
  import InputsTextArea from './components/Inputs/InputsTextArea.svelte';
  import Promises from './components/Promises.svelte';
  import PointerMouse from './components/PointerMouse.svelte';
  import OneKeyDownCapture from './components/OneKeyDownCapture.svelte';
  import CardsFlip from './components/CardsFlip.svelte';
  import Boxes from './components/Boxes.svelte';
  import CanvasVrapper from './components/CanvasVrapper.svelte';
  import Tippi from './components/Tippi.svelte';
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
<TransitionEvents />
<GlobalTransition />
<KeyBlocks />

<RowState />
<ReactiveClasses />

<GettersSetters />
<ReactiveBuiltIns />

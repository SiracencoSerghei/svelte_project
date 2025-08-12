<script lang="ts">
  import Nested from './Nested.svelte'; // Імпортуємо компонент Nested з локального файлу
  import Counter from './Counter.svelte'; // Імпортуємо компонент Counter з локального файлу

  let name = 'world'; // Змінна з рядком "world"
  let src = 'https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121_1280.jpg'; // URL зображення
  let string = `this string contains some <strong>HTML!!!</strong>` // Рядок, який містить HTML-теги

  let count = $state(0); // Створюємо реактивну змінну з початковим значенням 0
  function increment() { // Функція для збільшення лічильника
    count+=1; // Збільшує count на 1
  }

  let numbers = $state([1, 2, 3, 4]) // Створюємо реактивний масив чисел
  function addNumber() { // Функція для додавання нового числа у масив
   numbers.push(numbers.length + 1) // Додає новий елемент (довжина масиву + 1)
   console.log($state.snapshot(numbers)); // Логує поточний стан масиву
  }

  function sumArray(arr: number[]) { // Допоміжна функція для підрахунку суми елементів масиву
    return arr.reduce((acc, val) => acc + val, 0); // Використовує reduce для сумування
  }

  let total = $derived(numbers.reduce((acc, val) => acc + val, 0)) 
  // Створює похідний стан (derived state), який автоматично перераховує суму numbers

  let elapsed = $state(0) // Лічильник часу
  let interval = $state(1000) // Інтервал у мілісекундах

  $effect(() => { // Ефект, який виконується при зміні залежностей
    const id = setInterval(() => { // Запускає таймер
      elapsed += 1 // Щосекунди додає 1 до elapsed
    }, interval) // Використовує змінну interval для частоти
    return () => { // Очищення ефекту при оновленні або знищенні
      clearInterval(id) // Зупиняє таймер
    }
  })
</script>


<style>
  h1 {
    color: rgb(38, 139, 8); /* Зелений колір заголовка */
    text-align: center; /* Центрування тексту */
  }

  .image-container {
    max-width: 600px; /* Максимальна ширина контейнера */
    margin: 0 auto; /* Центрування по горизонталі */
    padding: 1rem; /* Внутрішній відступ */
  }

  img {
    max-width: 100%; /* Адаптивна ширина */
    height: auto; /* Зберігає пропорції */
    display: block; /* Прибирає пробіли під зображенням */
    object-fit: cover; /* Обрізає/масштабує для заповнення */
    border-radius: 8px; /* Закруглені кути */
  }
</style>


<!-- Заголовок з ім'ям у верхньому регістрі -->
<h1>Hello {name.toUpperCase()}!</h1>

<!-- Контейнер з картинкою -->
<div class="image-container">
  <img src={src} alt="{name} image" />
</div>

<!-- Використання компонента Nested з пропсом answer -->
<Nested answer={42}/>

<!-- Вивід рядка як тексту -->
<p>{string}</p>
<!-- Вивід рядка як HTML -->
<p>{@html string}</p>

<!-- Кнопка для інкремента лічильника -->
<button onclick={increment}>
Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<!-- Вивід суми масиву через функцію -->
<p>{numbers.join(' + ')} = {sumArray(numbers)}</p>
<!-- Вивід суми масиву через derived state -->
<p>{numbers.join(' + ')} = {total}</p>
<!-- Кнопка додавання числа в масив -->
<button onclick={addNumber}>
  Add a number
</button>

 <!-- // Effects -->
 <!-- Кнопка для прискорення інтервалу -->
 <div>
   <button onclick={() => interval /= 2} >Speed up</button>
   <!-- Кнопка для уповільнення інтервалу -->
   <button onclick={() => interval *= 2}>Slow down</button>
 </div>

 <!-- Відображення часу, що минув -->
 <p>elapsed: {elapsed}</p>

 <!-- Universal reactivity: три екземпляри лічильника Counter -->
 <Counter />
 <Counter />
 <Counter />


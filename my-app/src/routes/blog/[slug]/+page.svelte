<script context="module" lang="ts">
  // Це функція load для отримання параметрів
  export async function load({ params }) {
    const { slug } = params;  // Отримуємо параметр slug з URL
    console.log(slug); // Виводимо значення slug у консоль

    // Ви можете зробити запит на сервер або підготувати контент на основі параметра
    if (slug === 'hello-world') {
      return {
        title: 'Hello World',
        content: 'Welcome to the blog!'
      };
    }

    return {
      title: 'Page not found',
      content: 'This page does not exist.'
    };
  }
</script>

<script lang="ts">
  export let title: string;
  export let content: string;
</script>

<h1>{title}</h1>
<p>{content}</p>
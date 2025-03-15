import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const { slug } = params;

  // Перевіряємо slug і передаємо дані
  if (slug === 'hello-world') {
    return {
      title: 'Hello World!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  }

  // Якщо slug не знайдено
  throw error(404, 'Not found');
};

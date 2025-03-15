import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: true, // Додає підтримку PostCSS
	}),

	kit: {
		adapter: adapter(), // Автоматичний адаптер для деплою
	}
};

export default config;

import azure from 'svelte-adapter-azure-swa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: azure(),
		alias: {
			$db: './src/db',
		}
	}
};

export default config;

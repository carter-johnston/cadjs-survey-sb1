import azure from 'svelte-adapter-azure-swa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: azure()
	}
};

export default config;

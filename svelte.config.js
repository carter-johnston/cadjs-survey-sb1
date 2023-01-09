import preprocess from "svelte-preprocess";
// import azure from 'svelte-adapter-azure-swa';
import azure from "svelte-adapter-azure-swa";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: azure(),
    alias: {
      $db: "./src/db",
    },
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],
};

export default config;

<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

{#if data?.survey}
  <p>survey was found!</p>
{:else}
  <p>No survey data. fix me!</p>
{/if}

<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

{#if data?.survey?.isActive == true}
  <p>survey was found!</p>
  {JSON.stringify(data?.survey)}
{:else}
  <p>
    The survey you are trying load is no longer available, for further
    information, please contact your instructor.
  </p>
{/if}

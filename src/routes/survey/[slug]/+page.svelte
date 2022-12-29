<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#if data?.survey}
	{#each data?.survey as survey}
		{survey?.surveyName}
	{/each}
{:else}
	<p>No survey data. fix me!</p>
{/if}

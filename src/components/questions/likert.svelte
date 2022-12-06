<script>
	export let questionNumber;
	export let handleDelete;

	let columns = [];
	let rows = [];

	const defaultRow = "new question.";
	const defaultColumn = "new label.";
</script>

<span>
	<input type="checkbox" on:click={handleDelete}>
	<h2>Q{questionNumber}.</h2>
</span>

<table>
	<tr>
		<th>Question</th>
		{#each columns as column}
		<th  contenteditable="true" bind:textContent={column}>{column}</th>
		{/each}
	</tr>
	{#each rows as row}
		<tr>
			<td contenteditable="true" bind:textContent={row}>{row}</td>
			{#each columns as col}
				<td><input type="radio"></td>
			{/each}
		</tr>
	{/each}
</table>

<button class="btn btn-secondary" on:click={() => {
	rows = [...rows, defaultRow ];
}}>Add Row</button>

<button class="btn btn-secondary" on:click={() => {
	columns = [...columns, defaultColumn ];
}}>Add Column</button>
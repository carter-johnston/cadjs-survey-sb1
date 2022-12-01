<script>
	export let questionNumber;

	let columns = [];
	let rows = [];
	const defaultRow = "new question.";
	const defaultColumn = "new label.";
</script>

<h2>Q{questionNumber}.</h2>

<table>
	<tr>
		<th>Question</th>
		{#each columns as column}
		<th  contenteditable="true" bind:textContent={column}>{column}</th>
		{/each}
	</tr>
	{#each rows as item}
		<tr>
			<td contenteditable="true" bind:textContent={item}>{item}</td>
			{#each columns as col}
				<td><input type="radio"></td>
			{/each}
		</tr>
	{/each}
</table>
<button class="btn btn-secondary" on:click={() => {
	let newRow = rows.push(defaultRow);
	rows = newRow;
}}>Add Row</button>

<button class="btn btn-secondary" on:click={() => {
	let newColumn = columns.push(defaultColumn);
	columns = newColumn;
}}>Add Column</button>
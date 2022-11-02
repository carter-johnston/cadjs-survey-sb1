<script>
	export let questionNumber;

	let columns = [];
	let rows = [];
	let newRow = "row";
	let newColumn = "Col";
</script>

<h2>Q{ questionNumber }.</h2>

<table>
	<tr>
		<th>Question</th>
		{#each columns as column}
		<th contenteditable="true">{column}</th>
		{/each}
	</tr>
	{#each rows as item}
		<tr>
			<td contenteditable="true">row</td>
			{#each columns as column}
			<td><input type="radio"></td>
			{/each}
		</tr>
	{/each}
</table>

<button class="btn btn-secondary" on:click={() => {
	rows.push(newRow);
	rows = rows;
}}>Add Row</button>

<button class="btn btn-secondary" on:click={() => {
	columns.push(newColumn);
	columns = columns;
}}>Add Column</button>
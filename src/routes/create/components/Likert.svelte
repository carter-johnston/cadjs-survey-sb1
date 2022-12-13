<script>
	export let questionNo;
	//export let removeQuestion; //callback to remove component from list
	//export let questionBank; //callback to update question bank
	
	const defaultRow = "new question.";
	const defaultColumn = "new label.";
	let columns = [];
	let rows = [];

</script>
	<span>
		<input type="checkbox">
		<h2>Q{questionNo}.</h2>
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

<button type="button" class="btn btn-secondary" 
	on:click={() => {
		rows = [...rows, defaultRow ];
	}}>Add Row
</button>

<button type="button" class="btn btn-secondary" 
	on:click={() => {
		columns = [...columns, defaultColumn ];
	}}>Add Column
</button>
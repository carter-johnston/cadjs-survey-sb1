<script>
	import { createEventDispatcher } from 'svelte';

	export let indexInQuestionBank;
	export let uid;

	let columns = [];
	let rows = [];
	
	const defaultRow = "new question.";
	const defaultColumn = "new label.";
	const questionType = 'likert';
	const dispatchName = 'modifyQuestion';

	const dispatch = createEventDispatcher();

	$:{// Executes whenever any variables below are updated. dispatches event.
		const question = {
			uid,
			indexInQuestionBank,
			questionType,
			columns,
			rows,
		}
		dispatch(dispatchName, question);
	}

</script>
	<span>
		<input type="checkbox">
		<h2>Q{indexInQuestionBank+1}.</h2>
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
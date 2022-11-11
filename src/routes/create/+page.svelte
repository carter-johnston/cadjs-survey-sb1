<script>
  import { each } from 'svelte/internal';

  const currentDate = new Date();
  let componentList = [];
  let newRow = 'likert';
</script>

<h1>Create New Survey</h1>
<form action="">
  <label for="surveyName">Survey name:</label>
  <input type="text" /><br />

  <label for="createDate">Creation date:</label>
  <input type="text" placeholder={currentDate} readonly /><br />
  <hr />
  <div class="list-group">
    {#each componentList as component}
      <div>
        <h5>Heading</h5>
        <small>ADD: useful tip on how to edit question.</small>
      </div>
    {/each}
  </div>
  <button
    class="btn"
    on:click={() => {
      componentList.push(newRow);
      componentList = componentList;
    }}
  >
    <img src="" alt="+" /> Add Question
  </button>
  <select class="" id="questionSelector">
    <option value="likert">Likert</option>
    <option value="slider">Slider</option>
    <option value="text">Textbox</option>
    <option value="dropdown">Dropdown</option>
  </select>
</form>

<!-- <script>
	let columns = [];
	let rows = [];
	
	let newRow = "row";
	let newColumn = "Col";
</script>

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

<button on:click={() => {
	rows.push(newRow);
	rows = rows;
}}>Add Row</button>

<button on:click={() => {
	columns.push(newColumn);
	columns = columns;
}}>Add Column</button> -->

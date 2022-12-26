<script>
  export let questionData = {
    columns: [],
    rows: [],
  };
  export let index;

  const defaultRow = "new question.";
  const defaultColumn = "new label.";
</script>

<h2>Q{index + 1}.</h2>

<table>
  <tr>
    <th>Question</th>
    {#each questionData.columns as column}
      <th contenteditable="true" bind:textContent={column}>{column}</th>
    {/each}
  </tr>
  {#each questionData.rows as row}
    <tr>
      <td contenteditable="true" bind:textContent={row}>{row}</td>
      {#each questionData.columns as _}
        <td><input type="radio" disabled /></td>
      {/each}
    </tr>
  {/each}
</table>

<button
  type="button"
  class="btn btn-secondary"
  on:click={() => {
    questionData.rows = [...questionData.rows, defaultRow];
  }}
  >Add Row
</button>

<button
  type="button"
  class="btn btn-secondary"
  on:click={() => {
    questionData.columns = [...questionData.columns, defaultColumn];
  }}
  >Add Column
</button>

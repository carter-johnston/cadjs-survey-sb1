<script>
  export let index;
  export let questionData = {
    question: "",
    options: [],
  };
  let option = "dropdown option";
</script>

<div class="fs-2 mb-3">Q{index + 1}.</div>

<label for="q{index}">Question:</label><br />
<input
  type="text"
  id="q{index}"
  name="q{index}"
  bind:value={questionData.question}
/>

<label for="option">Options:</label>
<input type="text" id="option" name="option" bind:value={option} />

<button
  class="btn btn-secondary"
  on:click={() => {
    questionData.options = [option, ...questionData.options];
  }}>Add Dropdown Option</button
>
<ul>
  {#each questionData.options as option}
    <li>{option}</li>
  {/each}
</ul>

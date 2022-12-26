<script>
  export let index;
  export let questionData = {
    question: "",
    choice: ["option1", "option2", "option3", "option4"],
  };
</script>

<div class="fs-2 mb-3">Q{index + 1}.</div>

<label for="def">Question:</label><br />
<input type="text" id="def" name="def" bind:value={questionData.question} />

<label for="choice1" />
<input
  type="text"
  id="choice1"
  name="choice1"
  bind:value={questionData.choice[0]}
/>

<label for="choice2" />
<input
  type="text"
  id="choice2"
  name="choice2"
  bind:value={questionData.choice[1]}
/>

<label for="choice3" />
<input
  type="text"
  id="choice3"
  name="choice4"
  bind:value={questionData.choice[2]}
/>

<label for="choice4" />
<input
  type="text"
  id="choice4"
  name="choice4"
  bind:value={questionData.choice[3]}
/>

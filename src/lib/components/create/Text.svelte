<script>
  export let index;
  export let questionData = {
    question: "",
  };
</script>

<div class="fs-2 mb-3">Q{index + 1}.</div>

<label for="def">Question:</label><br />
<input type="text" id="def" name="def" bind:value={questionData.question} />

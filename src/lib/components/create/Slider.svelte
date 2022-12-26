<script>
  import Slider from "svelte-slider";

  export let index;
  export let questionData = {
    question: "",
    sliderValue: 0,
  };
</script>

<div class="fs-2 mb-3">Q{index + 1}.</div>

<label for="question">Question:</label><br />
<input
  type="text"
  id="question"
  name="slider"
  bind:value={questionData.question}
/>
<Slider
  on:change={(event) => console.log(event.detail)}
  value={[0, 1]}
  single
/>

<style>
  :root {
    --sliderPrimary: #ff9800;
    --sliderSecondary: rgba(0, 0, 0, 0.05);
  }
</style>

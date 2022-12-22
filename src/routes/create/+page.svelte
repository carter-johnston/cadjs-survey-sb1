<script>
  // import Selection from "./components/questions/Selection.svelte";
  // import Comment from "./questions/Comment.svelte";
  // import Dropdown from "./components/questions/Dropdown.svelte";
  import Likert from "./components/Likert.svelte";
  import Text from "./components/Text.svelte";
  import { writable } from "svelte/store";

  /** @type {import('./$types').ActionData} */
  export let form;

  const surveyForm = writable({
    title: "",
    description: "",
    questionBank: [],
  });

  const componentOptions = {
    likert: Likert,
    text: Text,
  };
  let selected = "likert";

  $: console.log({ $surveyForm });
</script>

<form method="POST" action="?/submitSurvey">
  <div class="ms-5 me-5 mt-2">
    <h1 class="mb-3">Create a Survey</h1>

    {#if form?.success}
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        {form?.message}
      </div>
    {/if}

    <div class="ms-3">
      <div class="form-group mb-3">
        <label class="form-label" for="title">Title:</label>
        <input name="title" type="text" bind:value={$surveyForm.title} />
      </div>

      <div class="form-group mb-3">
        <label class="form-label" for="desc">Description:</label>
        <input name="desc" type="text" bind:value={$surveyForm.description} />
      </div>

      <!-- <div class="form-group mb-3">
        <label class="form-label" for="dateCreated">Created:</label>
        <input name="dateCreated" type="text" bind:value={dateCreated} /> 
      </div> -->
      <!-- <input
        name="questions"
        type="hidden"
        value={JSON.stringify(questionBank)}
      /> -->
    </div>

    <div class="list-group">
      {#each $surveyForm.questionBank as question, index}
        <div class="list-group-item list-group-item-action">
          <svelte:component
            this={componentOptions[question.type]}
            bind:questionData={question.data}
            {index}
          />
        </div>
      {:else}
        <div class="lead mb-3 ms-3">
          To add a question, select the desired type from the dropdown menu and
          click "Add Question"
        </div>
      {/each}
    </div>

    <!-- On click will push selected component from dropdown to the list of questions -->
    <button
      type="button"
      class="btn btn-outline-secondary"
      on:click={() => {
        $surveyForm.questionBank = [
          ...$surveyForm.questionBank,
          {
            type: selected,
            data: undefined, //TODO default data models if any issues arise.
          },
        ];
      }}
      >Add Question
    </button>

    <select class="btn btn-secondary" bind:value={selected}>
      {#each Object.keys(componentOptions) as componentKey}
        <option value={componentKey}>{componentKey}</option>
      {/each}
    </select>

    <hr />

    <div>
      <button class="btn btn-primary">Submit</button>
      <button formaction="?/reset" class="btn btn-secondary">Reset</button>
      <!-- TODO add reset functionality -->
      <!-- TODO wrap submit and reset with prompt to user confirming. -->
    </div>
  </div>
</form>

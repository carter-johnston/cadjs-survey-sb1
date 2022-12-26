<script>
  import { copy } from "svelte-copy";
  import { jsPDF } from "jspdf";
  import { page } from "$app/stores";
  const path = $page.url;

  //TODO consult with Dhori on building out the survey.
  //you either need to overhaul that functionality or piggyback off his implementation and convert from html to pdf.
  function createPDF(survey) {
    let doc = new jsPDF();
    let text = `Survey Name: ${survey.surveyName}\nSurvey Author: ${survey.surveyAuthor}\nNum Questions: ${survey.numQuestions}\nCreation Date: ${survey.creationDate}\n`;
    doc.text(text, 10, 10);
    doc.save(survey.surveyName);
  }

  //TODO Update logic to "try" delete, if unsuccessful handle 400 error. if(!surveyName) will not typically be a concern
  async function deleteSurvey(surveyName) {
    if (!surveyName) {
      console.log(
        "No survey name was passed to delete function, check that survey entry has valid attributes."
      );
      return;
    } else {
      const urlArgument = new URLSearchParams();
      urlArgument.set("surveyName", `${surveyName}`);
      const url = `${path}?${urlArgument}`;
      const res = await fetch(url, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
    }
  }

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>Active Surveys</h1>

<div class="list-group">
  {#each data.activeSurveys as survey}
    <div class="list-group-item list-group-item-action">
      <span>Name: {survey.surveyName}</span>
      <span>Author: {survey.surveyAuthor}</span>
      <span>Num Questions: {survey.numQuestions}</span>
      <span>Creation Date: {survey.creationDate}</span>
      <button use:copy={window.location.host + "/survey"} class="btn btn-info"
        >Copy Link to Clipboard</button
      >
      <button on:click={() => createPDF(survey)} class="btn btn-secondary"
        >Download Link as PDF</button
      >
      <a href="/edit"><button class="btn btn-success">Edit</button></a>
      <button
        class="btn btn-danger"
        on:click={() => deleteSurvey(survey.surveyName)}>Delete</button
      >
    </div>
  {:else}
    <p>There are no existing surveys</p>
  {/each}
</div>

<style>
  span {
    display: flex;
  }
</style>

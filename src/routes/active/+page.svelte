<script>
  import { copy } from 'svelte-copy';
  import { jsPDF } from 'jspdf';
  const doc = new jsPDF();
  function createPDF() {
    doc.text('Test Survey', 10, 10);
    doc.save('Test Survey');
  }

  let surveyList = [
    {
      surveyName: 'Quest4Change',
      surveyAuthor: 'Aaron J. Goldstein',
      numQuestions: '4',
      creationDate: '10/27/2022',
    },
    {
      surveyName: 'Quest4Change2',
      surveyAuthor: 'Carter Johnston ',
      numQuestions: '4',
      creationDate: '10/27/2022',
    },
    {
      surveyName: 'Quest4Change3',
      surveyAuthor: 'Jacob Schipman',
      numQuestions: '4',
      creationDate: '10/27/2022',
    },
    {
      surveyName: 'Quest4Change4',
      surveyAuthor: 'Dhori Mato',
      numQuestions: '4',
      creationDate: '10/27/2022',
    },
  ];
</script>

<h1 class="header">Active Surveys</h1>
<a href="/create"><button class="btn-primary">Add Survey</button></a>

<div class="list-group">
  {#each surveyList as survey, index}
    <div class="list-group-item list-group-item-action">
      <span>Name: {survey.surveyName}</span>
      <span>Author: {survey.surveyAuthor}</span>
      <span>Num Questions: {survey.numQuestions}</span>
      <span>Creation Date: {survey.creationDate}</span>
      <button use:copy={window.location.host + '/survey'} class="btn-info"
        >Copy Link to Clipboard</button
      >
      <button on:click={createPDF} class="btn-secondary"
        >Download Link as PDF</button
      >
      <a href="/edit"><button class="btn-success">Edit</button></a>
      <a href="/delete"><button class="btn-danger">Delete</button></a>
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

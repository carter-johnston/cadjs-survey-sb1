<script>
    import { copy } from "svelte-copy";
    import { jsPDF } from "jspdf";

    function createPDF(survey) {
        let doc = new jsPDF();
        let text = `Survey Name: ${survey.surveyName}\nSurvey Author: ${survey.surveyAuthor}\nNum Questions: ${survey.numQuestions}\nCreation Date: ${survey.creationDate}\n`;
        doc.text(text, 10, 10);
        doc.save(survey.surveyName);
    }

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1 class="header">Active Surveys</h1>
<a href="/create"><button class="btn-primary">Add Survey</button></a>

<div class="list-group">
    {#each data.activeSurveys as survey, index}
        <div class="list-group-item list-group-item-action">
            <span>Name: {survey.surveyName}</span>
            <span>Author: {survey.surveyAuthor}</span>
            <span>Num Questions: {survey.numQuestions}</span>
            <span>Creation Date: {survey.creationDate}</span>
            <button use:copy={window.location.host + "/survey"} class="btn-info"
                >Copy Link to Clipboard</button
            >
            <button on:click={() => createPDF(survey)} class="btn-secondary"
                >Download Link as PDF</button
            >
            <a href="/edit"><button class="btn-success">Edit</button></a>
            <form class="form-inline" method="POST" action="?/deleteSurvey">
                <input
                    type="hidden"
                    name="surveyName"
                    value={survey.surveyName}
                />
                <button class="btn-danger">Delete</button>
            </form>
        </div>
    {:else}
        <p>There are no existing surveys</p>
    {/each}
</div>

<style>
    span {
        display: flex;
    }

    .form-inline {
        display: inline-block;
    }
</style>

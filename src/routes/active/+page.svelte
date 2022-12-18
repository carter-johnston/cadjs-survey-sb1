<script>
    import { copy } from "svelte-copy";
    import { jsPDF } from "jspdf";
    import { page } from "$app/stores";
    const path = $page.url;

    function createPDF(survey) {
        let doc = new jsPDF();
        let text = `Survey Name: ${survey.surveyName}\nSurvey Author: ${survey.surveyAuthor}\nNum Questions: ${survey.numQuestions}\nCreation Date: ${survey.creationDate}\n`;
        doc.text(text, 10, 10);
        doc.save(survey.surveyName);
    }

    async function deleteSurvey(surveyName) {
        if (!surveyName) {
            console.log(
                "No survey name was passed to delete function, check that survey entry has valid attributes."
            );
            return;
        } else {
            const url = `${path}/deleteSurvey/?surveyName=${surveyName}`;
            const res = await fetch(url, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            });
            console.log({ res });
        }
    }

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1 class="header">Active Surveys {path}</h1>
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
            <button on:click={createPDF(survey)} class="btn-secondary"
                >Download Link as PDF</button
            >
            <a href="/edit"><button class="btn-success">Edit</button></a>
            <button class="btn-danger" onclick={deleteSurvey(survey.surveyName)}
                >Delete</button
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

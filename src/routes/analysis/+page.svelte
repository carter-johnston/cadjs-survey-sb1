<h1>Analysis</h1>
<script>
    let surveyList = [
        {
            surveyName: "Quest4Change",
            surveyAuthor: "Aaron J. Goldstein",
            numQuestions: "4",
            creationDate: "10/27/2022",
        },
        {
            surveyName: "Quest4Change2",
            surveyAuthor: "Carter Johnston ",
            numQuestions: "4",
            creationDate: "10/27/2022",
        },
        {
            surveyName: "Quest4Change3",
            surveyAuthor: "Jacob Schipman",
            numQuestions: "4",
            creationDate: "10/27/2022",
        },
        {
            surveyName: "Quest4Change4",
            surveyAuthor: "Dhori Mato",
            numQuestions: "4",
            creationDate: "10/27/2022",
        },
    ];
</script>

<h1 class="header">Surveys ready to export</h1>


<div class="list-group">
    {#each surveyList as survey, index}
        <div class="list-group-item list-group-item-action">
            <span>Name: {survey.surveyName}</span>
            <span>Author: {survey.surveyAuthor}</span>
            <span>Num Questions: {survey.numQuestions}</span>
            <span>Creation Date: {survey.creationDate}</span>
            <button class="btn-info" id = "ExportXLSX">Download as Excel</button>
            <button class="btn-secondary" id = "ExportPDF">Download as PDF</button>
            <button class="btn-danger">Delete</button>
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
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

<div class="ms-5 me-5 mt-2">
	<h1 class="mb-3">Active Surveys</h1>
	<div class="lead ms-3 mb-3">
		Here is a list of existing surveys. Select the <i>"Activate"</i> button on
		the survey that you wish to share. Once activated, that survey will only
		be available until the set expiration date or until you close it.
	</div>
	<div class="list-group">
		{#each data.activeSurveys as survey}
			<div class="container border border-rounded m-2 p-2">
				<div class="d-flex p-2">
					<strong>
						{survey.surveyName}
						<span class="badge bg-success">active</span>
					</strong>
				</div>
				<div class="d-flex p-2">
					<div class="flex-fill">
						<strong>Author:</strong>
						{survey.surveyAuthor}
					</div>

					<div class="flex-fill">
						<strong>Created:</strong>
						{survey.dateCreated}
					</div>
				</div>
				<div class="d-flex p-2">
					<strong>Number of Questions:</strong>
					{survey.numOfQuestions}
				</div>

				<div class="d-flex p-2">
					<button
						class="btn btn-outline-success me-2"
						on:click={() => {}}>Activate</button
					>
					<button
						class="btn btn-outline-secondary me-2"
						use:copy={window.location.host + "/survey"}
						>Copy Link to Clipboard</button
					>
					<button
						class="btn btn-outline-secondary me-2"
						on:click={createPDF(survey)}
						>Download Link as PDF</button
					>
					<button class="btn btn-outline-secondary me-2">Edit</button>
					<button
						class="btn btn-outline-danger me-2"
						on:click={deleteSurvey(survey.surveyName)}
						>Delete</button
					>
				</div>
			</div>
		{:else}
			<p>There are no existing surveys</p>
		{/each}
	</div>
</div>

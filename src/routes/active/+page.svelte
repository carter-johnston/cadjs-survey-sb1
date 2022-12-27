<script>
	import { copy } from 'svelte-copy';
	import { jsPDF } from 'jspdf';
	import { page } from '$app/stores';
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
			urlArgument.set('surveyName', `${surveyName}`);
			const url = `${path}?${urlArgument}`;
			const res = await fetch(url, {
				method: 'DELETE',
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
	<div class="lead ms-3">
		Here is a list of existing surveys. Select <i>Activate</i> on the survey
		you with to share. Once activated, will only be available for a short time.
	</div>
	<div class="list-group">
		{#each data.activeSurveys as survey}
			<div class="container border border-rounded m-1 p-2">
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
						{survey.creationDate}
					</div>
				</div>
				<div class="d-flex ms-2">
					<strong>Number of Questions:</strong>
					{survey.numQuestions}
				</div>

				<div class="d-flex p-2">
					<button class="btn btn-success" on:click="{() => {}}"
						>Activate</button>
					<button
						class="btn btn-outline-secondary"
						use:copy="{window.location.host + '/survey'}"
						>Copy Link to Clipboard</button>
					<button
						class="btn btn-outline-secondary"
						on:click="{createPDF(survey)}"
						>Download Link as PDF</button>
					<button class="btn btn-outline-secondary">Edit</button>
					<button
						class="btn btn-outline-danger"
						on:click="{deleteSurvey(survey.surveyName)}"
						>Delete</button>
				</div>
			</div>
		{:else}
			<p>There are no existing surveys</p>
		{/each}
	</div>
</div>

<style>
	/* span {
		display: flex;
	} */
</style>

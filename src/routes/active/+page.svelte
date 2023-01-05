<script>
	import { jsPDF } from 'jspdf';
	import { page } from '$app/stores';

	const _url = $page.url;
	const _origin = $page.url.origin;

	async function handleActivation(surveyIdentifier) {
		if (!surveyIdentifier)
			return console.error(`no arguments passed to method: handleActivation()`);

		const urlArgument = new URLSearchParams();
		urlArgument.set('surveyIdentifier', surveyIdentifier);
		const url = `${_url}/server/activate/?${urlArgument}`;

		// fetch(url)
		// 	.then((res) => res.json)
		// 	.then((data) => data.ack);

		const res = await fetch(url);
		const data = await res.json();
		console.log(data.ack);
	}

	async function copySurveyPathToClipboard(surveyIdentifier) {
		if (!surveyIdentifier)
			return console.error(`no arguments passed to method: copySurveyPathToClipboard()`);

		const urlArgument = new URLSearchParams();
		urlArgument.set('surveyIdentifier', surveyIdentifier);
		const url = `${_url}/server/getLink/?${urlArgument}`;

		const res = await fetch(url);
		const data = await res.json();
		const webLink = data.link;

		const text = `${_origin}/survey/${webLink}/`;

		console.log(text);

		navigator.clipboard
			.writeText(text)
			.then(() => {
				alert(`${text} copied to clipboard`);
			})
			.catch((err) => {
				alert('Error in copying text: ', err);
			});
	}

	//TODO consult with Dhori on building out the survey on PDF.
	//you either need to overhaul that functionality or piggyback off his implementation and convert from html to pdf.
	function createPDF(survey) {
		let doc = new jsPDF();
		let text = `Survey Name: ${survey.surveyName}\nSurvey Author: ${survey.surveyAuthor}\nNum Questions: ${survey.numQuestions}\nCreation Date: ${survey.creationDate}\n`;
		doc.text(text, 10, 10);
		doc.save(survey.surveyName);
	}

	//TODO Update logic to "try" delete, if unsuccessful handle 400 error. if(!surveyName) will not typically be a concern
	async function deleteSurvey(surveyID) {
		if (surveyID) {
			const urlArgument = new URLSearchParams();
			urlArgument.set('surveyID', surveyID);
			const url = `${_url}/?${urlArgument}`;
			const res = await fetch(url, {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
			});
			const data = await res.json();
			console.log(data);
		}
	}

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="ms-5 me-5 mt-2">
	<h1 class="mb-3">Survey Management</h1>
	<div class="lead ms-3 mb-3">
		Here is a list of existing surveys. Select the <i>Activate</i> button on the survey that you wish
		to share. Once activated, that survey will only be available until the set expiration date or until
		you close it.
	</div>
	<div class="d-flex">
		<a href="/create"><button class="btn btn-secondary ms-3 me-2">+ Create a survey</button></a>
		<button class="btn btn-light me-1"><strong>&laquo;</strong></button>
		<button class="btn btn-light me-2"><strong>&raquo;</strong></button>
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
						{survey.creationDate}
					</div>
				</div>
				<div class="d-flex p-2">
					<strong>Number of Questions:</strong>
					{survey.numOfQuestions}
				</div>

				<div class="d-flex p-2">
					<button class="btn btn-success me-2" on:click="{handleActivation(survey.id)}"
						>Activate</button>
					<button class="btn btn-secondary me-2" on:click="{copySurveyPathToClipboard(survey.id)}"
						>Copy Link to Clipboard</button>
					<button class="btn btn-secondary me-2" on:click="{createPDF(survey)}"
						>Download Link as PDF</button>
					<button class="btn btn-secondary me-2">Edit</button>
					<button class="btn btn-danger me-2" on:click="{deleteSurvey(survey.surveyName)}"
						>Delete</button>
				</div>
			</div>
		{:else}
			<p>There are no existing surveys</p>
		{/each}
	</div>
</div>

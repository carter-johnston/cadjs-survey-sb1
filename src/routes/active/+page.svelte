<script>
	import { jsPDF } from "jspdf";
	import { page } from "$app/stores";

	/** @type {import('./$types').PageData} */
	export let data;

	const _url = $page.url;
	const _origin = $page.url.origin;

	//TODO maybe we can turn activation/deactivation into one function as just updating isActive
	async function handleActivation(surveyIdentifier) {
		if (!surveyIdentifier)
			return console.error(
				`no arguments passed to method: handleActivation()`
			);

		const urlArgument = new URLSearchParams();
		urlArgument.set("surveyIdentifier", surveyIdentifier);
		const url = `${_url}/server/activate/?${urlArgument}`;

		await fetch(url);

		return reloadPage();
	}

	async function handleDeactivation(surveyIdentifier) {
		if (!surveyIdentifier)
			return console.error(
				`no arguments passed to method: handleDeactivation()`
			);

		const urlArgument = new URLSearchParams();
		urlArgument.set("surveyIdentifier", surveyIdentifier);
		const url = `${_url}/server/deactivate/?${urlArgument}`;

		await fetch(url);

		return reloadPage();
	}

	async function copySurveyPathToClipboard(surveyIdentifier) {
		if (!surveyIdentifier)
			return console.error(
				`no arguments passed to method: copySurveyPathToClipboard()`
			);

		const urlArgument = new URLSearchParams();
		urlArgument.set("surveyIdentifier", surveyIdentifier);
		const url = `${_url}/server/getLink/?${urlArgument}`;

		const res = await fetch(url);
		const data = await res.json();

		const webLink = data.link;
		const text = `${_origin}/survey/${webLink}/`;

		navigator.clipboard
			.writeText(text)
			.then(() => {
				alert(`${text} copied to clipboard`); //TODO replace with a tooltip or toast.
			})
			.catch((err) => {
				alert("Error in copying text: ", err);
			});
	}

	async function deleteSurvey(surveyID) {
		const urlArgument = new URLSearchParams();
		urlArgument.set("surveyID", surveyID);
		const url = `${_url}/?${urlArgument}`;

		await fetch(url, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		});

		return reloadPage();
	}

	function reloadPage() {
		location.reload();
	}

	/*Pagination Functionality Start*/
	let pageIndex = 0;
	let pageLength = 5; //TODO Change how many items for each page.

	const fullSurveyList = data?.activeSurveys;
	const pageTotal = Math.ceil(fullSurveyList.length / pageLength);

	function previousPage() {
		if (pageIndex > 0) {
			pageIndex--;
		}
	}

	function nextPage() {
		if (pageIndex < pageTotal - 1) {
			pageIndex++;
		}
	}

	$: pagingStart = pageIndex * pageLength;
	$: pagedSurveyList = fullSurveyList.slice(
		pagingStart,
		pagingStart + pageLength
	);
	/*Pagination Functionality End*/

	let sortByActiveOn = true;
	let sortByNewestOn = true;

	function sortByActive() {
		if (sortByActiveOn == true)
			fullSurveyList.sort((a, b) => b.isActive - a.isActive);
		else fullSurveyList.sort((a, b) => a.isActive - b.isActive);
	}

	function sortByNewest() {
		if (sortByNewestOn == true) {
			fullSurveyList.sort((a, b) =>
				b.creationDate > a.creationDate ? 1 : -1
			);
		} else {
			fullSurveyList.sort((a, b) =>
				b.creationDate < a.creationDate ? 1 : -1
			);
		}
	}

	function sortSurveys() {
		sortByNewest();
		sortByActive();
		pagedSurveyList = fullSurveyList.slice(
			pageIndex * pageLength,
			(pageIndex + 1) * pageLength
		);
	}

	//TODO replace or remove when we implement previewer
	function createPDF(survey) {
		let doc = new jsPDF();
		let text = `Survey Name: ${survey.surveyName}\nSurvey Author: ${survey.surveyAuthor}\nNum Questions: ${survey.numQuestions}\nCreation Date: ${survey.creationDate}\n`;
		doc.text(text, 10, 10);
		doc.save(survey.surveyName);
	}
</script>

<div class="ms-5 me-5 mt-2">
	<h1 class="mb-3">Survey Management</h1>
	<div class="lead ms-3 mb-3">
		Here is a list of existing surveys. Select the <i>Activate</i> button on
		the survey that you wish to share. Once activated, that survey will only
		be available until the set expiration date or until you close it.
	</div>
	<div class="d-flex">
		<a href="/create"
			><button class="btn btn-secondary ms-3 me-2"
				>+ Create a survey</button
			></a
		>

		<!-- Previous Page -->
		<button
			class="btn btn-light me-1 border border-secondary"
			on:click={previousPage}><strong>&laquo;</strong></button
		>
		<span class="m-2">page {pageIndex + 1} of {pageTotal}</span>
		<!-- Next Page -->
		<button
			class="btn btn-light me-2 border border-secondary"
			on:click={nextPage}><strong>&raquo;</strong></button
		>
		{#if sortByActiveOn == true}
			<button
				class="btn btn-secondary me-2"
				on:click={() => (sortByActiveOn = false)}
				>Sort by Disabled</button
			>
		{:else}
			<button
				class="btn btn-success me-2"
				on:click={() => (sortByActiveOn = true)}>Sort by Active</button
			>
		{/if}
		{#if sortByNewestOn == true}
			<button
				class="btn btn-secondary me-2"
				on:click={() => (sortByNewestOn = false)}
				>Disable Sort by Newest</button
			>
		{:else}
			<button
				class="btn btn-success me-2"
				on:click={() => (sortByNewestOn = true)}
				>Enable Sort by Newest</button
			>
		{/if}
		<button class="btn btn-secondary me-2" on:click={sortSurveys}
			>Sort</button
		>
	</div>
	<div class="list-group">
		{#each pagedSurveyList as survey}
			<div class="container border border-rounded shadow m-2 p-2">
				<div class="d-flex p-2">
					<strong>
						{survey.surveyName}
						{#if survey?.isActive}
							<span class="badge bg-success">active</span>
						{:else}
							<span class="badge bg-secondary">disabled</span>
						{/if}
					</strong>
				</div>
				<div class="d-flex p-2">
					<div class="flex-fill">
						<strong>Number of Questions: </strong>
						{survey.numOfQuestions ?? "..."}
					</div>
					<div class="flex-fill">
						<strong>Created:</strong>
						{survey.creationDate}
					</div>
					<div class="flex-fill">
						<strong>Author:</strong>
						{survey.surveyAuthor ?? "..."}
					</div>
				</div>
				<div class="card m-2 w-75">
					<div class="card-body">
						{survey.surveyDescription}
					</div>
				</div>
				{#if survey?.isActive}
					<div class="d-flex p-2">
						<button
							class="btn btn-warning me-2"
							on:click={handleDeactivation(survey.id)}
							>Deactivate</button
						>
						<button
							class="btn btn-secondary me-2"
							on:click={copySurveyPathToClipboard(survey.id)}
							>Copy Link to Clipboard</button
						>
						<button class="btn btn-secondary me-2">Preview</button>
					</div>
				{:else}
					<div class="d-flex p-2">
						<button
							class="btn btn-success me-2"
							on:click={handleActivation(survey.id)}
							>Activate</button
						>
						<button class="btn btn-secondary me-2">Edit</button>
						<button
							class="btn btn-danger me-2"
							on:click={deleteSurvey(survey.id)}>Delete</button
						>
					</div>
				{/if}
			</div>
		{:else}
			<p>There are no existing surveys.</p>
		{/each}
	</div>
</div>

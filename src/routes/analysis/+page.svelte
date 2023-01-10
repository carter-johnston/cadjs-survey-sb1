<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let pageIndex = 0;
	let pageLength = 3; //TODO Change how many items for each page.

	const fullSurveyList = data?.activeSurveys;
	const pageTotal = Math.floor(fullSurveyList.length / pageLength);

	function previousPage() {
		if (pageIndex > 0) {
			pageIndex--;
		}
	}

	function nextPage() {
		if (pageIndex < pageTotal) {
			pageIndex++;
		}
	}

	$: pagingStart = pageIndex * pageLength;
	$: pagedSurveyList = fullSurveyList.slice(
		pagingStart,
		pagingStart + pageLength
	);
</script>

<div class="ms-5 me-5 mt-2">
	<h1 class="header">Surveys ready to export</h1>
	<div class="container-fluid">
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Author</th>
					<th scope="col">Creation Date</th>
					<th scope="col">No. of Responses</th>
					<th scope="col">Download Excel</th>
					<th scope="col">Download PDF</th>
				</tr>
			</thead>
			<tbody>
				{#each pagedSurveyList as survey, index}
					<tr>
						<th scope="row">{pagingStart + index + 1}</th>
						<td>
							<span
								class="d-inline-block text-truncate"
								style="max-width: 240px;"
							>
								{survey.surveyName}
							</span>
						</td>
						<td>
							<span
								class="d-inline-block text-truncate"
								style="max-width: 200px;"
							>
								{survey.surveyAuthor ?? "-"}
							</span>
						</td>
						<td>{survey.creationDate ?? "-"}</td>
						<td>{survey.numQuestions ?? "-"}</td>
						<td><input type="checkbox" /></td>
						<td><input type="checkbox" /></td>
					</tr>
				{:else}
					<p>There are no existing surveys</p>
				{/each}
				<tr>
					<td>
						<div class="d-flex">
							<!-- page left -->
							<button
								class="btn btn-light me-1 border border-secondary"
								on:click={previousPage}
								><strong>&laquo;</strong></button
							>
							<span class="m-2"
								>{pageIndex + 1} of {pageTotal + 1}</span
							>
							<!-- page right -->
							<button
								class="btn btn-light me-2 border border-secondary"
								on:click={nextPage}
								><strong>&raquo;</strong></button
							>
						</div>
					</td>
					<th />
					<td />
					<td />
					<td />
					<td
						><button class="btn btn-secondary"
							>Download Excel</button
						></td
					>
					<td
						><button class="btn btn-secondary">Download PDF</button
						></td
					>
				</tr>
			</tbody>
		</table>
	</div>
</div>

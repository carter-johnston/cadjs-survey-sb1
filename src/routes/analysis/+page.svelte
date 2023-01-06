<script>
	/** @type {import('./$types').PageData} */
	export let data;
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
				{#each data?.activeSurveys as survey, index}
					<tr>
						<th scope="row">{index + 1}</th>
						<td>
							<span class="d-inline-block text-truncate" style="max-width: 240px;">
								{survey.surveyName ?? '-'}
							</span>
						</td>
						<td>
							<span class="d-inline-block text-truncate" style="max-width: 200px;">
								{survey.surveyAuthor ?? '-'}
							</span>
						</td>
						<td>{survey.creationDate ?? '-'}</td>
						<td>{survey.numQuestions ?? '-'}</td>
						<td><input type="checkbox" /></td>
						<td><input type="checkbox" /></td>
					</tr>
				{:else}
					<p>There are no existing surveys</p>
				{/each}
				<tr>
					<td>
						<div class="d-flex">
							<button class="btn btn-light me-1"><strong>&laquo;</strong></button>
							<button class="btn btn-light me-2"><strong>&raquo;</strong></button>
						</div>
					</td>
					<th></th>
					<td></td>
					<td></td>
					<td></td>
					<td><button class="btn btn-secondary">Download Excel</button></td>
					<td><button class="btn btn-secondary">Download PDF</button></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

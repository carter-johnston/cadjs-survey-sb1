<script>
	import Slider from '$lib/components/create/Slider.svelte';
	import Likert from '$lib/components/create/Likert.svelte';
	import Text from '$lib/components/create/Text.svelte';
	import Selection from '$lib/components/create/Selection.svelte';
	import Dropdown from '$lib/components/create/Dropdown.svelte';

	import { writable } from 'svelte/store';

	//TODO add in custom message/error to validation summary
	//TODO maybe add validation first
	let submitted = false;

	const surveyForm = writable({
		surveyName: '',
		surveyDescription: '',
		questionBank: [],
		// numOfQuestions: $surveyForm.questionBank.length(),
		//dont do that.
	});

	const componentOptions = {
		likert: Likert,
		text: Text,
		selection: Selection,
		slider: Slider,
		dropdown: Dropdown,
	};
	let selected = 'likert';

	async function handleSubmit(e) {
		const ack = await fetch('', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify($surveyForm),
		});

		if (ack?.status == 200) {
			submitted = true;
		}
	}

	$: console.log({ $surveyForm }); //TODO remove

	function beforeUnload(event) {
		event.preventDefault();
		event.returnValue = '';
		return '...';
	}
</script>

<form on:submit|preventDefault="{handleSubmit}">
	<div class="ms-5 me-5 mt-2">
		<h1 class="mb-3">Create a Survey</h1>

		{#if submitted}
			<div class="alert alert-success alert-dismissible fade show" role="alert">
				"Survey Submitted successfully"
			</div>
		{/if}

		<div class="ms-3">
			<div class="form-group mb-3">
				<label class="form-label" for="title">Title:</label>
				<input name="title" type="text" bind:value="{$surveyForm.surveyName}" />
			</div>

			<div class="form-group mb-3">
				<label class="form-label" for="desc">Description:</label>
				<input name="desc" type="text" bind:value="{$surveyForm.surveyDescription}" />
			</div>
		</div>

		<div class="list-group">
			{#each $surveyForm.questionBank as question, index}
				<div class="list-group-item list-group-item-action shadow mb-1">
					<svelte:component
						this="{componentOptions[question.type]}"
						bind:questionData="{question.data}"
						index="{index}" />
				</div>
			{:else}
				<div class="lead mb-3 ms-3">
					To add a question, select the desired type from the dropdown menu and click "Add Question"
				</div>
			{/each}
		</div>
		<div class="d-flex mt-3">
			<!-- On click will push selected component from dropdown to the list of questions -->
			<button
				type="button"
				class="btn btn-outline-secondary"
				on:click="{() => {
					$surveyForm.questionBank = [
						...$surveyForm.questionBank,
						{
							type: selected,
							data: undefined, //TODO default data models if any issues arise.
						},
					];
				}}"
				>Add Question
			</button>

			<select class="btn btn-secondary" bind:value="{selected}">
				{#each Object.keys(componentOptions) as componentKey}
					<option value="{componentKey}">{componentKey}</option>
				{/each}
			</select>
		</div>

		<hr />

		<div>
			<button type="submit" class="btn btn-primary">Submit</button>
			<button formaction="?/reset" class="btn btn-secondary">Reset</button>
			<a href="/active"><button class="btn btn-secondary">Back to survey list</button></a>
			<!-- TODO add reset functionality -->
			<!-- TODO wrap submit and reset with prompt to user confirming. -->
		</div>
	</div>
</form>

<svelte:window on:beforeunload="{beforeUnload}" />

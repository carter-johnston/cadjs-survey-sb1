<script>
	import Slider from '$lib/components/survey/Slider.svelte';
	import Likert from '$lib/components/survey/Likert.svelte';
	import Text from '$lib/components/survey/Text.svelte';
	import Selection from '$lib/components/survey/Selection.svelte';
	import Dropdown from '$lib/components/survey/Dropdown.svelte';

	import { writable } from 'svelte/store';

	/** @type {import('./$types').PageData} */
	export let data;

	//TODO add userId, organization, and exit comment outside of the responses array
	const responseForm = writable({
		surveyId: data?.id,
		userId: '',
		organization: '',
		comment: '',
		responses: [],
	});

	const componentOptions = {
		// likert: Likert,
		text: Text,
		// selection: Selection,
		// slider: Slider,
		// dropdown: Dropdown,
	};

	async function handleSubmit(e) {
		const ack = await fetch('', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify($responseForm),
		});

		if (ack?.status == 200) {
			//TODO if success, redirect user to completed screen.
		}
	}

	$: console.log({ $responseForm }); //TODO remove
</script>

{#if data?.isActive == true}
	<form on:submit|preventDefault="{handleSubmit}">
		<div class="list-group">
			{#each data?.questionBank as question, index}
				<div class="list-group-item list-group-item-action mb-1">
					<svelte:component
						this="{componentOptions[question.type]}"
						bind:questionData="{question.data}"
						index="{index}"
						bind:answer="{$responseForm.responses[index]}" />
				</div>
			{/each}
		</div>

		<hr />

		<div>
			<button type="submit" class="btn btn-primary">Submit</button>
			<!-- TODO wrap submit with prompt to user confirming. -->
		</div>
	</form>
{:else}
	<!-- Display to the user when a survey is not active -->
	<p>
		The survey you are trying load is no longer available, for further information, please contact
		your instructor.
	</p>
{/if}

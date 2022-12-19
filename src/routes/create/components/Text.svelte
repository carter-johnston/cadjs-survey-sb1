<script>
	import { createEventDispatcher } from 'svelte';

	export let indexInQuestionBank;
	export let uid;

    let questionTextContent;
	
	const questionType = 'text';
	const dispatchName = 'modifyQuestion';

	const dispatch = createEventDispatcher();

	$:{// Executes whenever any variables below are updated. dispatches event.
		const question = {
			uid,
			indexInQuestionBank,
			questionType,
            questionTextContent,
		}
		dispatch(dispatchName, question);
	}
</script>


<div class="fs-2 mb-3">Q{indexInQuestionBank+1}.</div>

<label for="def">Question:</label><br>
<input type="text" id="def" name="def"><br>
<script>
	export let index;
	export let questionData;
	export let answer;
</script>

<div class="fs-2 mb-3">Q{index + 1}.</div>

<label for="def">{questionData.question}</label>
<div class="input-group">
	<textarea class="form-control" aria-label="With textarea" bind:value="{answer}"></textarea>
</div>

<script>
	import { Slider } from 'svelte-slider'; 
	
	export let questionNumber;
	let question = "On average how many hours do you work a week?";

	let value = null;
</script>
<h2>Q{questionNumber}.</h2>
<p>
	{question}
	{#if value !== null }
	{value*40}
	{/if}	
</p>

<div class="slider">
	<Slider on:change={(event) => value = event.detail[1]} value={[0, 1]} single />
	<input type="number" value="{value}" hidden>
</div>

<style>
	.slider {
		--sliderPrimary: #FF9800;
		--sliderSecondary: rgba(0, 0, 0, 0.05);
		margin: 16px;
	}
</style>
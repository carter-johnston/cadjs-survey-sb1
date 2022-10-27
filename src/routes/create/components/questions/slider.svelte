<script>
	import Slider from 'svelte-slider@latest';
	let question = "On average how many hours do you work a week?";
	//TODO: hook up min max to global variables
	//let min = 0;
	//let max = 40;
	let value = null;
</script>

<p>
	{question}
	{#if value !== null }
	{value*40}
	{/if}	
</p>

<div class="slider">
	<Slider on:change={(event) => value = event.detail[1]} value={[0, 1]} single />
</div>

<style>
	.slider {
		--sliderPrimary: #FF9800;
		--sliderSecondary: rgba(0, 0, 0, 0.05);
		margin: 16px;
	}
</style>
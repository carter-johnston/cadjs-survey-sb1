<script>
    import Dropdown from "./components/questions/Dropdown.svelte";
    import Likert from "./components/questions/Likert.svelte";
    import Selection from "./components/questions/Selection.svelte";
    import Text from "./components/questions/Text.svelte";
    import Slide from "./components/questions/Slide.svelte";
    import Comment from "./components/questions/Comment.svelte";

    const compOptions = [
		{ value:0, component: Likert },
		{ value:1, component: Slide },
		{ value:2, component: Text  },
        { value:3, component: Selection  },
        { value:4, component: Dropdown  },
        { value:5, component: Comment  }
	];

    const currentDate = new Date();

    let componentList = [];

    let selected = compOptions[0];

</script>

<h1>Create Survey</h1>

<label for="surveyName">Survey name:</label>
<input name="surveyName" type="text" /><br />

<label for="createDate">Creation date:</label>
<input name="createDate" type="text" placeholder={currentDate} readonly /><br />

<div class="list-group">
    {#each componentList as item, index}
        <div class="list-group-item list-group-item-action">
            <svelte:component this={selected.component} questionNumber={index+1} />
        </div>
    {:else}
        <p>No questions added</p>
    {/each}
</div>

<button class="btn btn-secondary" on:click={() => {
    componentList.push("survey");
    componentList = componentList; 
}}>Add Question</button>



<select bind:value={selected}>
	{#each compOptions as option}
		<option value={option}>1</option>
	{/each}
</select>
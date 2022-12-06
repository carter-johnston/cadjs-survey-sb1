<script>

    // import { Dropdown, Likert, Selection, Text, Comment  } from '../../components'; failed to load module for ssr
    //TODO barrel up imports
    import Dropdown from "../../components/questions/Dropdown.svelte";
    import Likert from "../../components/questions/Likert.svelte";
    import Selection from "../../components/questions/Selection.svelte";
    import Text from "../../components/questions/Text.svelte";
    import Comment from "../../components/questions/Comment.svelte";
    import { DateTime } from 'luxon';

    const componentOptions = [
		{ title: "Likert", component: Likert },
		{ title: "Text", component: Text  },
        { title: "Selection", component: Selection  },
        { title: "Dropdown", component: Dropdown  },
        { title: "Comment", component: Comment  },
	];
    const currentDate = DateTime.now();

    let componentList = [];

    let selected = componentOptions[0];

</script>

<h1>Create Survey</h1>

<label for="surveyName">Survey name:</label>
<input name="surveyName" type="text" /><br />

<label for="createDate">Creation date:</label>
<input name="createDate" type="text" placeholder={currentDate} readonly /><br />

<div class="list-group">
    {#each componentList as item, index}
        <div class="list-group-item list-group-item-action">
            <svelte:component this={item} questionNumber={index+1} />
        </div>
    {:else}
        <p>No questions added</p>
    {/each}
</div>

<button class="btn btn-outline-secondary" on:click={() => {
    componentList.push(selected.component);
    componentList = componentList; 
}}>Add Question</button>

<select class="btn btn-secondary" bind:value={selected} on:click={() => {}}>
	{#each componentOptions as option}
		<option value={option}>{option.title}</option>
	{/each}
</select>
<hr><br>
<div>
    <button class="btn btn-primary">Submit</button>
    <button class="btn btn-secondary">Reset</button>
</div>

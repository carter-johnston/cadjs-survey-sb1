<script>

    // import { Dropdown, Likert, Selection, Text, Comment  } from '../../components'; failed to load module for ssr
    //TODO barrel up imports
    import Dropdown from "../../components/questions/Dropdown.svelte";
    import Likert from "../../components/questions/Likert.svelte";
    import Selection from "../../components/questions/Selection.svelte";
    import Text from "../../components/questions/Text.svelte";
    import Comment from "../../components/questions/Comment.svelte";
    import { DateTime } from 'luxon';
    import { v4 as uuidv4 } from 'uuid';
    import { questionBank } from "../../stores/create-store";
    let bank;
    questionBank.subscribe(val => {
        bank = val;
    })
    $:console.log(bank);

    const componentOptions = [
		{ title: "Likert", component: Likert },
		{ title: "Text", component: Text  },
        { title: "Selection", component: Selection  },
        { title: "Dropdown", component: Dropdown  },
        { title: "Comment", component: Comment  },
        //FIXME fix slider 
        //{ title: 'Slider', component: Slider }, 
	];

    const dateCreated = DateTime.now();
    let selected = componentOptions[0];
    let questions = [];

    // function removeQuestion(index) {
    //     console.log(`${index} flagged for deletion`);
    //     questions.splice(index, 1)//FIXME pop only works for deleting tail of the list for some reason. additional attention needed.
    //     questions = questions;
    // };

    function handleRearrange(startPosition, endPosition) {
        //TODO hand drag and drop rearrange questions list.
    }

</script>

<h1>Create a Survey</h1>

<form on:submit|preventDefault method="POST" action="?/insertSurvey">

    <label for="surveyTitle">Title:</label>
    <input name="surveyTitle" type="text" /><br />
    
    <label for="surveyDesc">Description:</label>
    <input name="surveyDesc" type="text" /><br />
    
    <label for="dateCreated">Created:</label>
    <input name="dateCreated" type="text" placeholder={dateCreated} readonly><br />

    <!-- <input type="text" name="questions" value={questions} hidden> -->
    
    <!-- TODO add handle deletion to all components. https://svelte.dev/tutorial/keyed-each-blocks found it -->
    <div class="list-group">
        {#each questions as question, index}
            <div class="list-group-item list-group-item-action">

                <svelte:component 
                    this={question} 
                    questionNo={index+1}
                    id={uuidv4}
                />

            </div>
        {:else}
            <p>To add a question, select the desired type from the dropdown menu and click "Add Question"</p>
        {/each}
    </div>

    <!-- On click will push selected component from dropdown to the list of questions -->
    
    <button type="button" class="btn btn-outline-secondary" 
        on:click={() => {
            questions.push(selected.component);
            questions = questions; 
        }}>Add Question
    </button>

    <select class="btn btn-secondary" 
        bind:value={selected}>
        {#each componentOptions as option}
            <option value={option}>{option.title}</option>
        {/each}
    </select>

    <hr><br>

    <div>
        <button class="btn btn-primary">Submit</button>
        <button class="btn btn-secondary">Reset</button>
    </div>

</form>


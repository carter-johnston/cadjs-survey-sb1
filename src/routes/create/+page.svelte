<script>

    import Dropdown from "../../components/questions/Dropdown.svelte";
    import Likert from "../../components/questions/Likert.svelte";
    import Selection from "../../components/questions/Selection.svelte";
    import Text from "../../components/questions/Text.svelte";
    import Comment from "../../components/questions/Comment.svelte";
    import { DateTime } from 'luxon';
    import { v4 as uuidv4 } from 'uuid';

    const componentOptions = [
		{ title: "Likert", component: Likert },
		{ title: "Text", component: Text  },
        { title: "Selection", component: Selection  },
        { title: "Dropdown", component: Dropdown  },
        { title: "Comment", component: Comment  },
        //FIXME fix slider 
        //{ title: 'Slider', component: Slider }, 
	];

    /** @type {import('./$types').ActionData} */  
    export let form;

    const dateCreated = DateTime.now();
    let selected = componentOptions[0];
    let questionComponents = [];

    function alterQuestionInBank(questionNo) {
        console.log('bank is being altered.');
    }

    function removeQuestion(index) {
        console.log(`${index} flagged for deletion`);
        questions.splice(index, 1)//FIXME pop only works for deleting tail of the list for some reason. additional attention needed.
        questions = questions;
    };

    function handleRearrange(startPosition, endPosition) {
        //TODO hand drag and drop rearrange questions list.
    }

</script>
<form method="POST" action="?/submitSurvey">

    <div class="ms-5 me-5 mt-2">

        <h1 class="mb-3">Create a Survey</h1>

            {#if form?.success}
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {form?.message}
                </div>
            {/if}

            <div class="ms-3">
                <div class="form-group mb-3">
                    <label class="form-label" for="surveyTitle">Title:</label>
                    <input name="surveyTitle" type="text" />
                </div>
            
                <div class="form-group mb-3">
                    <label class="form-label" for="surveyDesc">Description:</label>
                    <input name="surveyDesc" type="text" />
                </div> 
            
                <div class="form-group mb-3">
                    <label class="form-label" for="dateCreated">Created:</label>
                    <input name="dateCreated" type="text" placeholder={dateCreated} readonly>
                </div>
            </div>

        

        <!-- <input type="text" name="questions" value={questions} hidden> -->
        
        <!-- TODO add handle deletion to all components. https://svelte.dev/tutorial/keyed-each-blocks found it -->
        <div class="list-group">
            {#each questionComponents as question, index}
                <div class="list-group-item list-group-item-action">

                    <svelte:component 
                        this={question} 
                        questionNo={index+1}
                        handleDelete={removeQuestion}
                        questionBank={alterQuestionInBank}
                        id={uuidv4}
                    />

                </div>
            {:else}
                <div class="lead mb-3 ms-3">To add a question, select the desired type from the dropdown menu and click "Add Question"</div>
            {/each}
        </div>

        <!-- On click will push selected component from dropdown to the list of questions -->
        
        <button type="button" class="btn btn-outline-secondary" 
            on:click={() => {
                questionComponents.push(selected.component);
                questionComponents = questionComponents; 
            }}>Add Question
        </button>

        <select class="btn btn-secondary" 
            bind:value={selected}>
            {#each componentOptions as option}
                <option value={option}>{option.title}</option>
            {/each}
        </select>

        <hr>

        <div>
            <button class="btn btn-primary">Submit</button>
            <button formaction="?/reset" class="btn btn-secondary">Reset</button>
        </div>
    </div>
</form>







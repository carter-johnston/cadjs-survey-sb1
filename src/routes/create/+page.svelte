<script>
    // import Selection from "./components/questions/Selection.svelte";
    // import Comment from "./questions/Comment.svelte";
    // import Dropdown from "./components/questions/Dropdown.svelte";
    import Likert from './components/Likert.svelte';
    import Comment from './components/Comment.svelte';
    import Text from './components/Text.svelte';

    import { DateTime } from 'luxon';
    import { v4 as uuidv4 } from 'uuid';

    /** @type {import('./$types').ActionData} */  
    export let form;

    const dateCreated = DateTime.now();
    const componentOptions = [
		{ title: "likert", component: Likert },
		{ title: "text", component: Text  },
        { title: "Comment", component: Comment  },
        //TODO add other components back.
	];

    let selected = componentOptions[0];
    let questionComponents = [];
    let questionBank = [];


    function removeQuestionFromBank(e) {
        //TODO add dispatch for removing a question from the list.
    };

    function modifyQuestionBank(e) {//TODO clean up (if indIndex equals Num else...)
        const question = e.detail;
        const existsInQuestionBank = questionBank.find(q => q.uid === question.uid);

        //if question is being added, append new question to the bank.
        if(!existsInQuestionBank) {
            questionBank = [question,...questionBank];
        }
        //question exists in the array. find index and replace it.
        else {
            console.log(question.uid)
            const indexOfQuestionInBank = questionBank.findIndex(q => question.uid == q.uid)
            questionBank.splice(indexOfQuestionInBank, 1, question);
            questionBank = questionBank;
            console.log(`modifying: ${indexOfQuestionInBank}`)
        }
    };
    $: console.log(questionBank);//TODO remove when bank functionality is complete.
 
    function handleRearrange(startPosition, endPosition) {
        //TODO handle drag and drop rearrange questions list.
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
        
        <div class="list-group">

            {#each questionComponents as question, index}
                <div class="list-group-item list-group-item-action">
                    <svelte:component this={question} on:modifyQuestion={modifyQuestionBank} indexInQuestionBank={index} uid={uuidv4()}/>
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
            <!-- TODO add reset functionality -->
            <!-- TODO wrap submit and reset with prompt to user confirming. -->
        </div>
    </div>
</form>







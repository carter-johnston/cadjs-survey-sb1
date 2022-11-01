<script>
    import Likert from "./components/questions/Likert.svelte";


    const currentDate = new Date();
    let componentList = [];
</script>

<h1>Create New Survey</h1>
    <label for="surveyName">Survey name:</label>
    <input type="text" /><br />

    <label for="createDate">Creation date:</label>
    <input type="text" placeholder={currentDate} readonly /><br />
    
    <div class="list-group">
        {#each componentList as item, index}
            <div class="list-group-item list-group-item-action">
                <Likert questionNumber={index+1} />
            </div>
        {:else}
            <p>No questions added</p>
        {/each}
    </div>








    <button class="btn btn-secondary" on:click={() => {
        componentList.push("survey");
        componentList = componentList; 
    }}>Add Question</button>

    <select class="" id="questionSelector">
        <option value="likert">Likert</option>
        <option value="slider">Slider</option>
        <option value="text">Textbox</option>
        <option value="dropdown">Dropdown</option>
    </select>
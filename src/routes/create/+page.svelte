<script>
    const currentDate = new Date();
    let componentList = [];
    let newRow = "likert";
</script>

<h1>Create New Survey</h1>
<form action="">
    <label for="surveyName">Survey name:</label>
    <input type="text" /><br />

    <label for="createDate">Creation date:</label>
    <input type="text" placeholder={currentDate} readonly /><br />

    
    <button class="btn" on:click={() => {}}>Add Question</button>

    <select class="" id="questionSelector">
        <option value="likert">Likert</option>
        <option value="slider">Slider</option>
        <option value="text">Textbox</option>
        <option value="dropdown">Dropdown</option>
    </select>
</form>
<script>
    //data is used when page is initialized i.e. ("return View(<model data>);")
    // /** @type {import('./$types').PageData} */  
    // export let data;

    /** @type {import('./$types').ActionData} */  
    export let form;
    
</script>
<form method="POST" action="?/testPost">
    <div>
        <label for="title">Enter title:</label>
        <input name="title" type="text">
    </div>
    <div>
        <button>Insert Into</button>
        <button formaction="?/testPost2">Retrieve List</button>
    </div>
</form>

{#if form?.success}
  <!-- this message is ephemeral; it exists because the page was rendered in      
    response to a form submission. it will vanish if the user reloads --> 
    <p>{form?.message}</p>
    <p>Atlas responded with {form?.ack}</p>

{/if}

{#if form?.success2}
    {#each form?.surveys as survey}
        <p>{survey.title}</p>
    {/each}
{/if}


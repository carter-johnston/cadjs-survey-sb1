<script>
    //data is used when page is initialized i.e. ("return View(<model data>);")
    // /** @type {import('./$types').PageData} */  
    // export let data;

    /** @type {import('./$types').ActionData} */  
    export let form;

    let data = '';
    if(form?.success2) {
        data = form?.result;
    }
</script>

<form method="POST" action="?/testPost">
    <div>
        <input name="message" type="text">
    </div>
    <div>
        <button>Send Request 1</button>
        <button formaction="?/testPost2">Send Request 2</button>
    </div>
</form>

{#if form?.success1}
  <!-- this message is ephemeral; it exists because the page was rendered in      
    response to a form submission. it will vanish if the user reloads --> 
    <p>MongoDb insert was successful</p>
    <p>Server responded with {form?.response}</p>

{/if}

{#if form?.success2}

<p>{form?.result}</p>
{/if}

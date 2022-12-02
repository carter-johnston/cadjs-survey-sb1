<script>
    let todo = {};

    async function submit() {
        const response = await fetch("", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(todo),
        });
    }
</script>

<form method="POST" on:submit|preventDefault={submit}>
    <input type="text" bind:value={todo.name} />
    <button type="submit">Submit</button>
</form>

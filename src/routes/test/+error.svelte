<script>
    import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error.message}</h1>
<p>This is a custom error message...</p>
<p>look at +error.svelte</p>

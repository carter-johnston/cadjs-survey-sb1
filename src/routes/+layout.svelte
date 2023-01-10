<script>
	import { page } from "$app/stores";

	const _origin = $page.url.origin;
	const _logoURL = `${_origin}/y4c-logo.png`;
</script>

<nav class="navbar navbar-expand-lg nav-tabs bg-light ">
	<a class="navbar-brand" href="/">
		<img class="ms-4" src={_logoURL} alt="Yoga 4 Change" width="100px" />
	</a>
	<ul class="navbar-nav">
		<li>
			<a class="nav-link" href="/active">Survey Management</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/analysis">Survey Analysis</a>
		</li>
	</ul>
</nav>

<slot />

<!-- FIXME style footer properly. -->

<!-- <footer>
    <p id="footer">Created by the CADJS team.</p>
</footer> -->
<style>
	/* #footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
  } */
</style>

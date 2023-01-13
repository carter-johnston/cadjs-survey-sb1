<script>
	import { page } from '$app/stores';

	const _origin = $page.url.origin;
	const _logoURL = `${_origin}/y4c-logo.png`;
</script>

<nav class="navbar navbar-expand-lg nav-tabs bg-light ">
	<a class="navbar-brand" href="/">
		<img class="ms-4" src="{_logoURL}" alt="Yoga 4 Change" width="100px" />
	</a>
	<ul class="navbar-nav">
		<li>
			<a class="nav-link" href="/active"><div class="lead">Survey Management</div></a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/analysis"><div class="lead">Survey Analysis</div></a>
		</li>
	</ul>
</nav>

<slot />

<!-- <footer>
	<div style="background-color:darkblue;">
		<div class="container h-200 pt-4">
			<div class="row h-100 align-items-center">
				<div class="col-12 text-center">
					<p>add stuff to the footer</p>
				</div>
			</div>
		</div>
	</div>
</footer> -->

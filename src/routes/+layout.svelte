<nav class="nav nav-tabs justify-content-center">
    <li class="nav-item">
        <a class="nav-link" href="/active">Active Surveys</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/create">Create Survey</a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="/analysis">Analysis</a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="/survey">Survey TEMP</a>
    </li>
</nav>

<slot />

<footer>
    <p id="footer">Created by the CADJS team.</p>
</footer>

<style>
    nav {
        text-align: center;
    }

    #footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        height: 40px;
    }
</style>

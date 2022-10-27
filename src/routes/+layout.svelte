<nav>
    <a href="/active">Active Surveys</a>
    |
    <a href="/create">Create Survey</a>
    |
    <a href="/analysis">Analysis</a>
    |
    <a href="/survey">Survey TEMP</a>

</nav>

<slot></slot>

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
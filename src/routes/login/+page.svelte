<div class="card">
  <div class="card-header">
    <h2>Login</h2>
  </div>
  <div class="card-body">
    <form method="POST" action="/">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          name="username"
          id="username"
          placeholder="johndoe"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <button class="btn btn-success">Login</button>
    </form>
  </div>
</div>

<style>
  .card {
    text-align: center;
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
  }

  div {
    margin-top: 12px;
  }

  input {
    width: 50%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
</style>

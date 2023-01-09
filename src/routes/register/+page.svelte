<script>
  /** @type {import('./$types').ActionData} */
</script>

<div class="card">
  <div class="card-header">
    <h2>Register</h2>
  </div>
  <div class="card-body">
    <form method="POST" action="?/register">
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
        <label for="firstName" class="form-label">First Name</label>
        <input
          type="text"
          class="form-control"
          name="firstName"
          id="firstName"
          placeholder="John"
        />
      </div>
      <div>
        <label for="lastName" class="form-label">Last Name</label>
        <input
          type="text"
          class="form-control"
          name="lastName"
          id="lastName"
          placeholder="Doe"
        />
      </div>
      <div>
        <label for="emailAddress" class="form-label">Email Address</label>
        <input
          type="email"
          class="form-control"
          name="emailAddress"
          id="emailAddress"
          placeholder="test@gmail.com"
        />
      </div>
      <div>
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div>
        <button class="btn btn-primary">Register</button>
      </div>
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

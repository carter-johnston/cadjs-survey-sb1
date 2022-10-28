<h1>Survey #1</h1>
<br />
<form action="POST">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label"
      >Please enter a username. The username should be the first two letters of
      your first name, the first two letters of your last name followed by the
      month and day of your birthday. For example, John Doe, born September 5th
      would have the following username: JODO0905</label
    >
    <input
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="JODO0905"
    />
  </div>
  <ul class="likert">
    <li>
      <input type="radio" name="likert" value="strong_agree" />
      <label for="radio">Strongly agree</label>
    </li>
    <li>
      <input type="radio" name="likert" value="strong_agree" />
      <label for="radio">Agree</label>
    </li>
    <li>
      <input type="radio" name="likert" value="strong_agree" />
      <label for="radio">Neutral</label>
    </li>
    <li>
      <input type="radio" name="likert" value="disagree" />
      <label for="radio">Disagree</label>
    </li>
    <li>
      <input type="radio" name="likert" value="strong_agree" />
      <label for="radio">Strongly disagree</label>
    </li>
  </ul>
</form>

<style>
  h1 {
    text-align: center;
  }

  .mb-3 {
    margin: 0px 25px;
  }

  form .likert {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0 0 35px;
    display: block;
    border-bottom: 2px solid #efefef;
  }
  form .likert:last-of-type {
    border-bottom: 0;
  }
  form .likert:before {
    content: '';
    position: relative;
    top: 11px;
    left: 9.5%;
    display: block;
    background-color: #efefef;
    height: 4px;
    width: 78%;
  }
  form .likert li {
    display: inline-block;
    width: 19%;
    text-align: center;
    vertical-align: top;
  }
  form .likert li input[type='radio'] {
    display: block;
    position: relative;
    top: 0;
    left: 50%;
    margin-left: -6px;
  }
  form .likert li label {
    width: 100%;
  }
</style>

<h1>Survey #1</h1>
<br />
<form action="POST">
  <div class="userName">
    <label for="userId">
      Please enter a username. The username should be the first two letters of
      your first name, the first two letters of your last name followed by the
      month and day of your birthday. For example, John Doe, born September 5th
      would have the following username: JODO0905
    </label>
    <input type="text" class="userId" placeholder="JODO0905" />
  </div>
  <ul class="likert">
    <li>Strongly Disagree <input type="radio" class="likert" /></li>
    <li>Somewhat Disagree <input type="radio" class="likert" /></li>
    <li>Neutral <input type="radio" class="likert" /></li>
    <li>Somehwat Agree <input type="radio" class="likert" /></li>
    <li>Strongly Agree <input type="radio" class="likert" /></li>
  </ul>
</form>

<style>
  h1 {
    text-align: center;
  }

  .userName {
    display: grid;
    margin: 0px 35px;
  }
</style>

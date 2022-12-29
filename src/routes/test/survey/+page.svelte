<h1>Survey #1</h1>
<br />
<form method="POST" action="/surveySuccess">
	<div class="mb-3">
		<label for="exampleFormControlInput1" class="form-label"
			>Please enter a username. The username should be the first two
			letters of your first name, the first two letters of your last name
			followed by the month and day of your birthday. For example, John
			Doe, born September 5th would have the following username: JODO0905</label>
		<input
			type="email"
			class="form-control"
			id="exampleFormControlInput1"
			placeholder="JODO0905" />
	</div>
	<ul class="likert">
		<p>
			After the Quest for Change program, I am able to control my emotions
			better than I was before.
		</p>
		<li>
			<input type="radio" name="likert" value="1" />
			<label for="radio">Strongly agree</label>
		</li>
		<li>
			<input type="radio" name="likert" value="2" />
			<label for="radio">Agree</label>
		</li>
		<li>
			<input type="radio" name="likert" value="3" />
			<label for="radio">Neutral</label>
		</li>
		<li>
			<input type="radio" name="likert" value="4" />
			<label for="radio">Disagree</label>
		</li>
		<li>
			<input type="radio" name="likert" value="5" />
			<label for="radio">Strongly disagree</label>
		</li>
	</ul>
	<label for="customRange3" class="form-range"
		>After Quest4Change, I feel more confident and better about myself</label>
	<input
		type="range"
		class="form-range"
		min="1"
		max="5"
		id="customRange3"
		step="0.956"
		selected="3" />

	<div class="dropdown">
		<label for="dropdown-item"
			>I would recommend Quest4Change to my family and peers.</label>
		<select class="dropdown-item" name="Dropdown">
			<option value="su">Strongly Unlikely</option>
			<option value="u">Unlikely</option>
			<option value="n" selected>Neutral</option>
			<option value="l">Likely</option>
			<option value="sl">Strongly Likely</option>
		</select>
	</div>

	<div class="texta">
		<textarea
			cols="168"
			rows="5"
			placeholder="In 250 words or less, please explain any recommendations you have to better Quest4Change"
		></textarea>
	</div>
	<div class="btnSubmit">
		<div class="d-grid gap-2 d-md-block">
			<div class="d-grid gap-2 d-md-block">
				<a href="/survey/surveySuccess"
					><button class="btn btn-primary" type="button"
						>Submit</button
					></a>
			</div>
		</div>
	</div>
</form>

<style>
	.btnSubmit {
		position: fixed;
		left: 47%;
	}

	.dropdown {
		align-items: center;
		text-align: center;
		padding: 0% 35%;
		border-radius: 50px;
		margin-bottom: 50px;
	}

	.dropdown select {
		background-color: lightgray;
	}

	.texta {
		margin: 25px 25px;
	}
	form {
		display: block;
	}
	p {
		text-align: center;
	}
	h1 {
		text-align: center;
	}

	.mb-3 {
		margin: 0px 25px;
	}

	form .likert {
		list-style: none;
		width: 100%;
		margin-bottom: 15px;
		padding: 0 0 35px;
		display: block;
		align-items: center;
		border-bottom: 2px solid #efefef;
	}

	form .likert:last-of-type {
		border-bottom: 0;
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

	.form-range {
		padding: 0px 135px;
		text-align: center;
		margin-bottom: 35px;
	}
</style>

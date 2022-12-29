import { error } from '@sveltejs/kit';
import survey from '$lib/';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	//guard to see if params.slug is valid. we dont want to ping the database for blatantly wrong requests. (character length, valid digits, etc)
	const isSlugValid = params.slug != null && params.slug.length == 32;
	if (!isSlugValid) {
		throw error(404, 'Slug provided is not valid'); //TODO change error msg to something more meaningful to the user.
	}

	//get survey data from db.
	const data = await survey.findOne(
		{ linkIdentifier: params.slug },
		{
			projection: {
				_id: 0,
				surveyName: 1,
				questionBank: 1,
			},
		}
	);

	//check if db gives a valid response.
	if (!data) {
		//FIXME This wont work. whatever empty data looks like compare to that
		throw error(404, 'Survey was not found.');
	}

	return {
		survey: data,
	};
}

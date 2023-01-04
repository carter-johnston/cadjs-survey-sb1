import { error } from '@sveltejs/kit';
import { surveys } from "$lib/collections/surveys";



/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  //guard to see if params.slug is valid. we dont want to ping the database for blatantly wrong requests. (character length, valid digits, etc)
  const isSlugValid = params.slug != null;
  if (!isSlugValid) {
    throw error(404, 'Slug provided is not valid'); //TODO change error msg to something more meaningful to the user.
  }

  //get survey data from db.
  const data = await surveys.findOne(
    { webLink: params.slug },
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

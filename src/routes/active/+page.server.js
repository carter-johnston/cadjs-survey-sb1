import { surveys } from "$lib/collections/surveys";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let activeSurveys = await surveys
    .find(
      {},
      {
        limit: 50,
        projection: {
          _id: 0,
          surveyName: 1,
          surveyAuthor: 1,
          numOfQuestions: 1,
          creationDate: 1,
          
          isActive: 1,
        },
      }
    )
    .toArray();
  return { activeSurveys };
}

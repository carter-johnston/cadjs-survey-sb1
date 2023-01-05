import { surveys } from '$lib/collections/surveys';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const data = await surveys
		.find(
			{},
			{
				projection: {
					_id: 1,
					surveyName: 1,
					surveyAuthor: 1,
					numOfQuestions: 1,
					creationDate: 1,
					isActive: 1,
				},
			}
		)
		.toArray();

	const activeSurveys = data.map(({ _id, ...surveyData }) => {
		const id = _id.toString();
		return { id, ...surveyData };
	});

	return { activeSurveys };
}

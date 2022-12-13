import { surveys } from '$lib/collections/surveys';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let activeSurveys = await surveys.find({}, {
        limit: 50, projection: {
            _id: 0,
            surveyName: 1,
            surveyAuthor: 1,
            numQuestions: 1,
            creationDate: 1,
        }
    }).toArray();
    return { activeSurveys };
}

/** @type {import('./$types').Actions} */
export const actions = {
    deleteSurvey: async ({ request }) => {
        console.log(request);

        const data = await request.formData();

        console.log({ data });

        const deleteName = data.get('surveyName');

        console.log({ deleteName });

        const mongoResponse = await surveys.deleteOne({ surveyName: deleteName });
        // console.log(mongoResponse);

        return {
            success: true,
            message: `Server received ${deleteName} and deleted it from the db collection.`,
            ack: JSON.stringify(mongoResponse),
        }
    },
};



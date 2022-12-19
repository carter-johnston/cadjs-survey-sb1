import { surveys } from '$lib/collections/surveys';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    submitSurvey: async ({ request }) => {

        //get and format survey object
        const data = await request.formData();

        const surveyTitle = data.get('surveyTitle');
        const surveyDesc = data.get('surveyDesc');
        const dateCreated = data.get('dateCreated');
        const questions = data.get('questions');
       
        const ack = await surveys.insertOne({
            surveyTitle,
            surveyDesc,
            dateCreated,
            author: "test-user",
            questions,
        });

        //return ack
        return {
            success: true,
            message: JSON.stringify(ack),
        }
    },
};


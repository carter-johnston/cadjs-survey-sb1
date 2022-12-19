import { surveys } from '$lib/collections/surveys';

//TODO add logic for handling errors.
/** @type {import('./$types').Actions} */
export const actions = {
  submitSurvey: async ({ request }) => {
    const data = await request.formData();

    const surveyTitle = data.get('surveyTitle');
    const surveyDesc = data.get('surveyDesc');
    const dateCreated = data.get('dateCreated');
    const questions = data.get('questions');

    const ack = await surveys.insertOne({
      surveyTitle,
      surveyDesc,
      dateCreated,
      questions,
      // author: "test-user",
    });

    //return acknowledgement message 
    return {
      success: true,
      message: JSON.stringify(ack),
    }
  },
};


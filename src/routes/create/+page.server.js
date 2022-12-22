import { surveys } from '$lib/collections/surveys';

//TODO add logic for handling errors. 
/** @type {import('./$types').Actions} */
export const actions = {
  submitSurvey: async ({ request }) => {
    const data = await request.formData();
    console.log(data);

    // let dateCreated = DateTime.now().toFormat('DD').toString();//EX: Dec 19, 2022


    const surveyTitle = data.get('title');
    const surveyDesc = data.get('desc');
    const dateCreated = data.get('dateCreated');
    const questions = JSON.parse(data.get('questions'));

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


import { surveys } from '../../db/collections/surveys';


/** @type {import('./$types').PageLoad} */
export async function load() {
    //if post successful, redirect to Active-Surveys page. 
    
    //get questionbank.
}

/** @type {import('./$types').Actions} */
export const actions = {
    insertSurvey: async ({ request }) => {

        //get and format survey object
        const data = await request.formData();

        const surveyTitle = data.get('surveyTitle');
        const surveyDesc = data.formData.get('surveyDesc');
        const dateCreated = data.formDate.get('dateCreated');
        const questions = data.formDate.get('questions');
       
        //insertOne into db
        const dbResponse = await surveys.insertOne({
            surveyTitle,
            surveyDesc,
            dateCreated,
            author: "test-user",
            questions,
        });

        console.log(dbResponse);

        //return ack
        return {
            success: true,
            ack: JSON.stringify(dbResponse), 
        }
    },
};


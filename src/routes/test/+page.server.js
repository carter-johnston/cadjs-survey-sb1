import { surveys } from '$lib/server/surveys';

/** @type {import('./$types').Actions} */
export const actions = {
    testPost: async ({ request }) => {

        //establish connection > database > collection.
        //TODO: move connection out to its own service if it becomes too cumbersome. 

        //get form data from req. async needed.
        const data = await request.formData();

        //get string values of your form data
        const surveyName = data.get('title');


        //insert one object into db. async needed or else you'll get back "<pending>"
        const mongoResponse = await surveys.insertOne({
            surveyName,
            surveyAuthor: "test-user",
        });
        console.log(mongoResponse);

        //assigns to ActionData on the page. (export let form;)
        return {
            success: true,
            message: `Server received ${surveyName} and inserted it into the db collection.`,
            ack: JSON.stringify(mongoResponse),
        }
    },

    testPost2: async ({ request }) => {

        const data = await surveys.find({}, {
            limit: 50, projection: {
                _id: 0,
                surveyName: 1,
            }
        }).toArray();
        console.log('data', data)

        return {
            success2: true,
            surveys: data,
        }
    },
};
import { test_collection } from '$lib/collections/test_collection';
 
// /** @type {import('./$types').PageServerLoad} */
// export async function load({  }) {

//  }

/** @type {import('./$types').Actions} */
export const actions = {
    testPost: async ({ request }) => {

        //get form data from req. async needed.
        const data = await request.formData();

        //get string values of your form data
        const surveyName = data.get('title');

        //insert one object into db. async needed or else you'll get back "<pending>"
        const mongoResponse = await test_collection.insertOne({
            title,
            author: "test-user",
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

        const data = await test_collection.find({}, {limit: 50, projection: {
            _id:0,
            title: 1,
        }}).toArray();
        console.log('data', data)    

        return {
            success2: true,
            surveys: data,
        }
    },
};
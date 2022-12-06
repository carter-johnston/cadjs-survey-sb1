import clientPromise from '../../db/mongodb_client';
import { surveys } from '../../db/collections/surveys';
 
// /** @type {import('./$types').PageServerLoad} */
// export async function load({  }) {

//  }

/** @type {import('./$types').Actions} */
export const actions = {
    testPost: async ({ request }) => {
    
        //establish connection > database > collection.
        //TODO: move connection out to its own service if it becomes too cumbersome. 

        //get form data from req. async needed.
        const data = await request.formData();

        //get string values of your form data
        const title = data.get('title');


        //insert one object into db. async needed or else you'll get back "<pending>"
        const mongoResponse = await surveys.insertOne({
            title,
            author: "test-user",
        });
        console.log(mongoResponse);

        //assigns to ActionData on the page. (export let form;)
        return {
            success: true,
            message: `Server received ${title} and inserted it into the db collection.`, 
            ack: JSON.stringify(mongoResponse),
            }
    },

    testPost2: async ({ request }) => {

        const data = await surveys.find({}, {limit: 50, projection: {
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
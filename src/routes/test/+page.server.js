import clientPromise from '../../api/mongodb_client';

/** @type {import('./$types').PageServerLoad} */
export async function load({  }) {
    //enter code you want to run after every page load
    //Good for login authentication.
 }

/** @type {import('./$types').Actions} */
export const actions = {
    testPost: async ({ request }) => {
        
        //establish connection > database > collection.
        //TODO: move connection out to its own service. 
        const dbConnection = await clientPromise;
        const db = dbConnection.db();
        const collection = db.collection('test_collection');

        const data = await request.formData();
        const message = data.get('message');
        const parsedRequest = JSON.parse(message); 
        const stringifiedMessage = JSON.stringify(parsedRequest);
        const mongoResponse = await collection.insertOne(stringifiedMessage);

        
        return { success1: true, response: mongoResponse };
    },

    testPost2: async ({ request }) => {

        const dbConnection = await clientPromise;
        const db = dbConnection.db();
        const collection = db.collection('test_collection');

        //select all from collection as a list > stringify each item of the list.
        //const dbResult = await collection.find().map(x => JSON.stringify(x));
        let dbResult = await collection.find()
        let spagettiString = JSON.stringify(dbResult);
        let parsedResult = JSON.parse(spagettiString);        

        return { success2: true, result: parsedResult}
    },
};
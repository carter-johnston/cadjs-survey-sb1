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
        console.log(data);
        const message = data.get('message');
        const stringifiedMessage = JSON.stringify(message);
        const parsedRequest = JSON.parse(stringifiedMessage); 

        const mongoResponse = await collection.insertOne(parsedRequest);

        
        return { success1: true, response: JSON.parse(mongoResponse) };
    },

    testPost2: async ({ request }) => {

        const dbConnection = await clientPromise;
        const db = dbConnection.db();
        const collection = db.collection('test_collection');

        //select all from collection as a list > stringify each item of the list.
        //const dbResult = await collection.find().map(x => JSON.stringify(x));
        let dbResult = await collection.find().toArray();
        
        console.log(JSON.stringify(dbResult));
        

        return { success2: true }
    },
};
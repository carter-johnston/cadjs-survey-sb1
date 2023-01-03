import { error, json } from '@sveltejs/kit';
import { surveys } from '$lib/collections/surveys';
import { ObjectID } from 'bson';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const surveyIdentifier = url.searchParams.get('surveyIdentifier');

    if(!surveyIdentifier) {
		console.log(`ERR: activate action called with param: ${surveyIdentifier}"`); 
		throw error(400, ' no query arguments passed for surveyIdentifier.');
	}

	const data = await surveys.findOne({ _id: ObjectID(surveyIdentifier) });

	if(!data) {
		console.log(`ERR: activate action called with param: ${surveyIdentifier} MongoDB responded with ${data}"`); 
		throw error(400, 'server failed to retrieve the survey specified.');
	}

    const generatedWebLink = crypto.randomUUID();

    const ack = await surveys.updateOne (
        {_id: ObjectID(surveyIdentifier)},
        {$set: 
            {
                "webLink": generatedWebLink,
                "isActive": true
            }
        }, 
    );

    console.log(ack);
    
	return json({
        ack
	});

}
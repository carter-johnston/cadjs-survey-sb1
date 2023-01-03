import { error, json } from '@sveltejs/kit';
import { surveys } from '$lib/collections/surveys';
import { ObjectID } from 'bson';

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ url }) {
	const deleteName = url.searchParams.get('surveyName') ?? '0';

	console.log(deleteName);

	if (!deleteName) {
		throw error(400, 'Survey name must be exist when attempting to delete.');
	}

	const mongoResponse = await surveys.deleteOne({ surveyName: deleteName });
	console.log(mongoResponse);

	return new Response(
		JSON.stringify({
			success: true,
			message: `Server received ${deleteName} and deleted it from the db collection.`,
			ack: JSON.stringify(mongoResponse),
		}),
		{ status: 200 }
	);
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const surveyIdentifier = url.searchParams.get('surveyIdentifier');

	const data = await surveys.findOne({ _id: ObjectID(surveyIdentifier) });

	if(!data) {
		console.log(`ERR: action called with param: ${surveyIdentifier} MongoDB responded with ${data}"`); 
		throw error(400, 'server failed to retrieve the survey specified.');
	}

	const isSurveyActivated = data.isActive;
	let existingWebLink = data.webLink; 

	//TODO: assign an expiration, compare to request date, and handle expired as inactive.
	// let expirationDate = data.expirationDate;
	// const isSurveyInactiveOrExpired = data.isActive;

	if(!isSurveyActivated){
		console.log(`ERR: action called with param: ${surveyIdentifier} survey is not activated. (inActive set to ${isSurveyActivated})`); 
		throw error(400, 'server failed because survey is not active.');
	}

	if(!existingWebLink){
		console.log(`ERR: action called with param: ${surveyIdentifier}. Something went wrong as there is no existingWebLink)`); 
		throw error(400, 'Something went wrong. Please contact IT.');
	}

	return json({
		link: existingWebLink,
	})
}

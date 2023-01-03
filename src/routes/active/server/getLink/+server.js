import { error, json } from '@sveltejs/kit';
import { surveys } from '$lib/collections/surveys';
import { ObjectID } from 'bson';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const surveyIdentifier = url.searchParams.get('surveyIdentifier');

	const data = await surveys.findOne({ _id: ObjectID(surveyIdentifier) });

	if(!data) {
		console.log(`ERR: getLink action called with param: ${surveyIdentifier} MongoDB responded with ${data}"`); 
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
	});

}

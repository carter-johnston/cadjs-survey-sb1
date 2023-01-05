import { error, json } from '@sveltejs/kit';
import { surveys } from '$lib/collections/surveys';
import { ObjectID } from 'bson';

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ url }) {
	const deleteID = url.searchParams.get('surveyID') ?? '0';

	if (!deleteID) {
		throw error(400, 'Survey ID was not sent to server.');
	}

	const mongoResponse = await surveys.deleteOne({ _id: ObjectID(deleteID) });

	return new Response(
		JSON.stringify({
			success: true,
			message: `Server received ${deleteID} and deleted it from the db collection.`,
			ack: JSON.stringify(mongoResponse),
		}),
		{ status: 200 }
	);
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const surveyIdentifier = url.searchParams.get('surveyIdentifier');

	const data = await surveys.findOne({ _id: ObjectID(surveyIdentifier) });

	if (!data) {
		console.log(`ERR: action called with param: ${surveyIdentifier} MongoDB responded with ${data}"`);
		throw error(400, 'server failed to retrieve the survey specified.');
	}

	const isSurveyActivated = data.isActive;
	let existingWebLink = data.webLink;

	//TODO: assign an expiration, compare to request date, and handle expired as inactive.
	// let expirationDate = data.expirationDate;
	// const isSurveyInactiveOrExpired = data.isActive;

	if (!isSurveyActivated) {
		console.log(`ERR: action called with param: ${surveyIdentifier} survey is not activated. (inActive set to ${isSurveyActivated})`);
		throw error(400, 'server failed because survey is not active.');
	}

	if (!existingWebLink) {
		console.log(`ERR: action called with param: ${surveyIdentifier}. Something went wrong as there is no existingWebLink)`);
		throw error(400, 'Something went wrong. Please contact IT.');
	}

	return json({
		link: existingWebLink,
	})
}

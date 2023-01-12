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

import db from '$lib/mongodb_client';

export const surveys = db.collection('surveys'); //TODO: add collection to env
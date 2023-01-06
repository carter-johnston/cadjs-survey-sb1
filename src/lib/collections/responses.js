import db from '$lib/mongodb_client';

export const responses = db.collection('responses');
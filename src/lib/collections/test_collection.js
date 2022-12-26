import db from '$lib/mongodb_client';

export const test_collection = db.collection('test_collection');
import db from '$lib/mongodb_client';

export const test_collection = await db.collection('test_collection');//TODO: add collection to env
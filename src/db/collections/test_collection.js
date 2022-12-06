import db from '../mongodb_client';

export const surveys = db.collection('test_collection');//TODO: add collection to env
import db from '../mongodb_client';

export const surveys = db.collection('surveys'); //TODO: add collection to env

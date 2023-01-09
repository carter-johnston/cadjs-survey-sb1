import db from '../mongodb_client';

export const users = db.collection('users'); //TODO: add collection to env

import { start_mongodb } from './db/mongodb_client';

start_mongodb().then(() => {
    console.log('Connection to MongoDb started.');
});
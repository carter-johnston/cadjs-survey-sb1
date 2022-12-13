import { start_mongodb } from '$db/mongodb_client';S

start_mongodb().then(() => {
    console.log('Connection to MongoDb started.');
});
import  {MongoClient}  from 'mongodb';
//import dotenv from 'dotenv';

//dotenv.config();

const uri = process.env['MONGODB_URI'];

const client = new MongoClient("mongodb+srv://admin-user-2:password12345@cadjs-cluster.ekarosn.mongodb.net/?retryWrites=true&w=majority");

export function start_mongodb() {
    console.log('initializing connection to mongodb client...')
    return client.connect();
}

export default client.db('cadjs');

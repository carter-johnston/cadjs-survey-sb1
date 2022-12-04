import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env['MONGODB_URI'];

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

let client
let clientPromise

if (!uri)
    throw new Error('Please add your Mongo URI to .env.local')

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export default clientPromise

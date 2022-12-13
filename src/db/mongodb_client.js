import  {MongoClient}  from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env['MONGODB_URI'];
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}
const client = new MongoClient(uri, options);

export function start_mongodb() {
    console.log('initializing connection to mongodb client...')
    return client.connect();
}

export default client.db('cadjs');

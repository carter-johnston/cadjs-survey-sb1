import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from `dotenv`
 
dotenv.config();



//TODO: add to env
const credentials = 'X509-cert-5650174497133697990.pem'
const client = new MongoClient(process.env.MONGODB_URI, {
    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1
});

export default client;
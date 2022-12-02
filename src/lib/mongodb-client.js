import { MongoClient, ServerApiVersion } from 'mongodb';

// const fs = require('fs');
const credentials = 'X509-cert-5650174497133697990.pem'
const client = new MongoClient('mongodb+srv://cadjs-cluster.ekarosn.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1
});
/*async function run() {
    try {
        await client.connect();
        const database = client.db("testDB");
        const collection = database.collection("testCol");
        const docCount = await collection.countDocuments({});
        console.log(docCount);
        // perform actions using client
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);*/

export default client;
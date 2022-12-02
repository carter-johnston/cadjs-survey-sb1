import client from '../../lib/mongodb-client'

export async function POST({ request }) {
    const db = client.db();
    const collection = db.collection('surveys');
    const todo = await request.json(); // JSON.parse(request.body); // “Walk the dog”
    const newTodo = await collection.insertOne(todo);
    console.log({ todo, newTodo });

    return new Response();
}
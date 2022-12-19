import { json } from '@sveltejs/kit';


/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    // console.log(...event.request.headers);
    let reader = event.request.body.getReader();
    


    console.log(fields)

    return json({
        questions: event.request.headers.get('questions'),
    })
}
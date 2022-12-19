import { json } from '@sveltejs/kit';


/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
  console.log(...event.request.headers);

  return json({
    questions: event.request.body.questions,
  })
}
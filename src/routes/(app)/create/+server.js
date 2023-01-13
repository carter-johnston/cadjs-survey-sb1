import { json } from "@sveltejs/kit";
import { surveys } from "$lib/collections/surveys";
import { DateTime } from "luxon";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const data = await request.json();

  console.log(data);
  const ack = await surveys.insertOne({
    ...data,
    creationDate: DateTime.now().toString(),
  });

  return json(ack);
}

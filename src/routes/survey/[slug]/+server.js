import { json } from "@sveltejs/kit";
import { responses } from "$lib/collections/responses";
import { DateTime } from "luxon";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const data = await request.json();

  console.log(data);
  const ack = await responses.insertOne({
    ...data,
    creationDate: DateTime.now(),
  });

  return json(ack);
}
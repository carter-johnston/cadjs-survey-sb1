import { error } from "@sveltejs/kit";
import { surveys } from "$lib/collections/surveys";

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ url }) {
  const deleteName = url.searchParams.get("surveyName") ?? "0";

  console.log(deleteName);

  if (!deleteName) {
    throw error(400, "Survey name must be exist when attempting to delete.");
  }

  const mongoResponse = await surveys.deleteOne({ surveyName: deleteName });
  console.log(mongoResponse);

  return new Response(
    JSON.stringify({
      success: true,
      message: `Server received ${deleteName} and deleted it from the db collection.`,
      ack: JSON.stringify(mongoResponse),
    }),
    { status: 200 }
  );
}

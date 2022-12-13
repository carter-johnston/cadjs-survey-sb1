// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
//     return {
//       survey: {
//         surveyName: `Title for ${params.slug} goes here`,
//         surveyAuthor: `Content for ${params.slug} goes here`,
//         numQuestions: `Number of Questions ${params.slug} goes here`,
//         creationDate: `Creation date ${params.slug} goes here`
//       }
//     };
//   }

  import * as db from '$lib/server/database';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    post: await db.getPost(params.slug)
  };
}
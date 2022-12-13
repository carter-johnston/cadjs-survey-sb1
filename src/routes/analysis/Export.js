import db from "$db"
export async function GET() {
  const cars = await db.collection('surveys').find().toArray()
  return {
    status: 200,
    body: { surveys }
  }
}